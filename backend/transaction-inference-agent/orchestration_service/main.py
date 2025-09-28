from fastapi import FastAPI, HTTPException
from apscheduler.schedulers.background import BackgroundScheduler
import requests
import os

app = FastAPI()

DATA_SERVICE_URL = os.getenv("DATA_SERVICE_URL")
INFERENCE_SERVICE_URL = os.getenv("INFERENCE_SERVICE_URL")
TRAINER_SERVICE_URL = os.getenv("TRAINER_SERVICE_URL")
SMS_SERVICE_URL = os.getenv("SMS_SERVICE_URL")

def run_training():
    try:
        response = requests.post(f"{TRAINER_SERVICE_URL}/train/")
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"Error running training: {e}")

scheduler = BackgroundScheduler()
scheduler.add_job(run_training, "interval", minutes=60)
scheduler.start()

@app.post("/inference/")
def trigger_inference(transaction_id: int):
    try:
        # Trigger inference
        inference_response = requests.post(f"{INFERENCE_SERVICE_URL}/predict/", params={"transaction_id": transaction_id})
        inference_response.raise_for_status()
        inference_result = inference_response.json()

        # If fraud is detected, send an SMS
        if inference_result.get("is_fraud"):
            # Get transaction details
            transaction_response = requests.get(f"{DATA_SERVICE_URL}/transactions/{transaction_id}")
            transaction_response.raise_for_status()
            transaction_details = transaction_response.json()

            # Send SMS
            message = f"Fraudulent transaction detected!\nTransaction ID: {transaction_details.get('id')}\nAmount: {transaction_details.get('amount')}"
            sms_payload = {"message": message}
            sms_response = requests.post(f"{SMS_SERVICE_URL}/check-fraud", json=sms_payload)
            sms_response.raise_for_status()

        return inference_result

    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/training/")
def trigger_training():
    try:
        response = requests.post(f"{TRAINER_SERVICE_URL}/train/")
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=str(e))
