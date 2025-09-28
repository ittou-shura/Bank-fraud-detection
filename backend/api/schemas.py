from pydantic import BaseModel
from typing import Optional


class TransactionBase(BaseModel):
    sender: str
    receiver: str
    amount: float
    time: Optional[str] = None
    created_at: Optional[str] = None
    is_fraud: Optional[bool] = False
    risk_level: Optional[str] = "low"
    ip_address: Optional[str] = None
    location: Optional[str] = None


class TransactionCreate(TransactionBase):
    pass


class Transaction(TransactionBase):
    id: int

    class Config:
        orm_mode = True
