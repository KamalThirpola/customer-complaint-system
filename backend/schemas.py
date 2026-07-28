from pydantic import BaseModel

class ComplaintCreate(BaseModel):
    name: str
    email: str
    category: str
    complaint: str

class ComplaintResponse(ComplaintCreate):
    id: int
    status: str

    class Config:
        from_attributes = True


class AIRequest(BaseModel):
    complaint: str

class ChatRequest(BaseModel):
    complaint: str
    question: str