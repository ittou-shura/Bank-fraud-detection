import sys, joblib, warnings
from pathlib import Path
import numpy as np, pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.ensemble import IsolationForest
from sklearn.metrics import classification_report
from xgboost import XGBClassifier
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
from fastapi import FastAPI, HTTPException
import requests
import os

warnings.filterwarnings("ignore")

# ------------------------------------------------ CONFIG
DATA_PATH      = Path("data.csv")
RAND_SEED      = 42
NN_EPOCHS      = 60
NN_BATCH       = 32
SAFE_LOC_FILE  = "safe_locations.pkl"
tf.random.set_seed(RAND_SEED)
np.random.seed(RAND_SEED)

MODEL_STORE_URL = os.getenv("MODEL_STORE_URL")

app = FastAPI()

# --------------------------------- Neural-network builder
def build_nn(input_dim: int = 2) -> keras.Model:
    model = keras.Sequential([
        layers.Input(shape=(input_dim,)),
        layers.Dense(64, activation="relu"),
        layers.Dropout(0.3),
        layers.Dense(32, activation="relu"),
        layers.Dropout(0.2),
        layers.Dense(16, activation="relu"),
        layers.Dense(1,  activation="sigmoid")
    ])
    model.compile(
        optimizer=keras.optimizers.Adam(1e-3),
        loss="binary_crossentropy",
        metrics=["accuracy"]
    )
    return model

# ------------------------------------------------ TRAINING
@app.post("/train/")
def train_models_endpoint():
    try:
        train_models()
        return {"message": "Models trained and saved successfully."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def train_models(csv_path: Path = DATA_PATH):
    if not csv_path.exists():
        sys.exit(f"❌  {csv_path} not found")

    df = pd.read_csv(csv_path)
    req = {"amount", "time", "location", "risk"}
    if not req.issubset(df.columns):
        sys.exit(f"❌  CSV must contain columns {req}")

    df["amount"] = df["amount"].astype(int)
    df["time"]   = df["time"].astype(int)

    print(f"✔ {len(df)} rows  |  risk distribution:\n{df['risk'].value_counts()}\n")

    # -- derive SAFE_LOCATIONS from low-risk entries
    safe_locs = set(df[df['risk'] == 0]['location'].unique())
    joblib.dump(safe_locs, SAFE_LOC_FILE)
    print(f"✅  Derived {len(safe_locs)} safe locations from data and saved to {SAFE_LOC_FILE}\n")

    # ---------------- Isolation Forest on LOCATION
    ohe_loc = OneHotEncoder(handle_unknown="ignore", sparse_output=False)
    X_loc   = ohe_loc.fit_transform(df[["location"]])
    iso_loc = IsolationForest(
        n_estimators=150, contamination=0.01, random_state=RAND_SEED
    ).fit(X_loc)

    # ---------------- XGBoost & NN on AMOUNT+TIME
    scaler = StandardScaler()
    X_num  = scaler.fit_transform(df[["amount", "time"]])
    y      = df["risk"]

    X_tr, X_te, y_tr, y_te = train_test_split(
        X_num, y, test_size=0.2,
        stratify=y, random_state=RAND_SEED
    )

    # ---- XGBoost
    xgb = XGBClassifier(
        objective="binary:logistic",
        eval_metric="logloss",
        use_label_encoder=False,
        random_state=RAND_SEED,
        scale_pos_weight=(y_tr == 0).sum() / max((y_tr == 1).sum(), 1),
        verbosity=0
    )
    xgb.fit(X_tr, y_tr)
    print("=== XGBoost performance ===")
    print(classification_report(y_te, xgb.predict(X_te), digits=4))

    # ---- Neural-Network
    nn = build_nn(2)
    nn.fit(
        X_tr, y_tr,
        epochs=NN_EPOCHS,
        batch_size=NN_BATCH,
        validation_split=0.2,
        verbose=0
    )
    nn_pred = (nn.predict(X_te, verbose=0) > 0.5).astype(int).ravel()
    print("=== Neural Network performance ===")
    print(classification_report(y_te, nn_pred, digits=4))

    # ---- Save artefacts
    artifacts = {
        "scaler.pkl": scaler,
        "xgb_amt_time.pkl": xgb,
        "ohe_location.pkl": ohe_loc,
        "iso_location.pkl": iso_loc,
        SAFE_LOC_FILE: safe_locs
    }
    for name, artifact in artifacts.items():
        with open(name, "wb") as f:
            joblib.dump(artifact, f)
        with open(name, "rb") as f:
            files = {'file': (name, f)}
            response = requests.post(f"{MODEL_STORE_URL}/upload/", files=files)
            response.raise_for_status()

    nn.save("nn_amt_time.keras")
    with open("nn_amt_time.keras", "rb") as f:
        files = {'file': ("nn_amt_time.keras", f)}
        response = requests.post(f"{MODEL_STORE_URL}/upload/", files=files)
        response.raise_for_status()
    
    print("\n✅  Saved: scaler.pkl, xgb_amt_time.pkl, nn_amt_time.keras, "
          "ohe_location.pkl, iso_location.pkl")
