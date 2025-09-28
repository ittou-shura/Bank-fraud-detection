from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Transaction(BaseModel):
    id: int
    amount: float

@app.post("/authorize")
def authorize():
    # In the future, this endpoint will be responsible for starting the
    # transaction authorization process.
    return {"message": "Transaction authorization started"}

@app.post("/sms")
def sms():
    # In the future, this endpoint will be responsible for handling incoming
    # SMS messages and triggering the appropriate workflows.
    return {"message": "SMS received"}

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/transaction/{transaction_id}")
def get_transaction(transaction_id: int):
    # In the future, this endpoint will fetch transaction details from the data_service.
    return {"message": f"Details for transaction {transaction_id}"}

@app.post("/transaction")
def post_transaction(transaction: Transaction):
    # In the future, this endpoint will create a new transaction in the data_service.
    return {"message": f"Transaction {transaction.id} created"}

@app.post("/verify-transaction")
def verify_transaction():
    # In the future, this endpoint will be used to verify a transaction's authenticity,
    # likely by triggering the inference_service.
    return {"message": "Transaction verification process started"}
