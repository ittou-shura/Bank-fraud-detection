from langgraph import Workflow

workflow = Workflow()

@workflow.step
async def sms_fraud_check_step(message: str):
    from app.openai_client import check_fraud_llm
    return await check_fraud_llm(message)
