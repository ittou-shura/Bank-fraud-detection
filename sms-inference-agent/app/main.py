from fastapi import FastAPI
from app.schemas import SMSPayload, FraudResult
from app.langgraph_agent import workflow

app = FastAPI(title="SMS Fraud Detection AI Agent")

@app.post("/check-fraud", response_model=FraudResult)
async def check_fraud(payload: SMSPayload):
    result = await workflow.run_step("sms_fraud_check_step", payload.message)
    return result
