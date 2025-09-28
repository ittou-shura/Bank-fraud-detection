from sqlalchemy import Column, Integer, Float, DateTime, Boolean
from .database import Base
import datetime

class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)
    amount = Column(Float, index=True)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)
    is_fraud = Column(Boolean, default=False)