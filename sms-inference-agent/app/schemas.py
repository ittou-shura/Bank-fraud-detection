from pydantic import BaseModel

class SMSPayload(BaseModel):
    sender: str
    message: str

class FraudResult(BaseModel):
    fraud: bool
    confidence: float
    explanation: str
