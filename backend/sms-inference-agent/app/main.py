from fastapi import FastAPI
from app.schemas import SMSPayload, FraudResult
from app.langgraph_agent import graph

app = FastAPI(title="SMS Fraud Detection AI Agent")

@app.post("/check-fraud", response_model=FraudResult)
async def check_fraud(payload: SMSPayload):
    final_state = await graph.ainvoke({"message": payload.message})
    return final_state.get("fraud_result")
