import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

async def check_fraud_llm(message: str):
    prompt = f"Is this SMS fraudulent? Message: {message}"
    response = openai.ChatCompletion.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=150
    )
    # Parse response content here (simplified example)
    return {"fraud": True, "confidence": 0.9, "explanation": "Contains suspicious link"}
