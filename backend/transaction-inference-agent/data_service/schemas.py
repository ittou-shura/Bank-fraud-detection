from pydantic import BaseModel
import datetime

class TransactionBase(BaseModel):
    amount: float

class TransactionCreate(TransactionBase):
    pass

class Transaction(TransactionBase):
    id: int
    timestamp: datetime.datetime
    is_fraud: bool

    class Config:
        orm_mode = True