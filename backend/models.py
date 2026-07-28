from sqlalchemy import Column, Integer, String
from database import Base

class Complaint(Base):
    __tablename__ = "complaints"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    email = Column(String(100))
    category = Column(String(100))
    complaint = Column(String(500))
    status = Column(String(50), default="Open")