import os
import pickle
import requests
from fastapi import FastAPI, HTTPException

app = FastAPI()

DATA_SERVICE_URL = os.environ.get("DATA_SERVICE_URL")
MODEL_STORE_URL = os.environ.get("MODEL_STORE_URL")
MODEL_NAME = os.environ.get("MODEL_NAME")


@app.post("/predict/")
def predict(transaction_id: int):
    try:
        response = requests.get(f"{DATA_SERVICE_URL}/transactions/{transaction_id}")
        response.raise_for_status()
        transaction = response.json()
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=str(e))

    try:
        model_response = requests.get(f"{MODEL_STORE_URL}/download/{MODEL_NAME}")
        model_response.raise_for_status()
        model = pickle.loads(model_response.content)
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=f"Error downloading model: {e}")
    except pickle.PickleError as e:
        raise HTTPException(status_code=500, detail=f"Error loading model: {e}")


    prediction = model.predict([[transaction["amount"]]])
    is_fraud = bool(prediction[0])

    try:
        response = requests.put(f"{DATA_SERVICE_URL}/transactions/{transaction_id}", json={"is_fraud": is_fraud})
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=str(e))

    return {"transaction_id": transaction_id, "is_fraud": is_fraud}
