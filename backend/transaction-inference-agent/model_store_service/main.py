from fastapi import FastAPI, UploadFile, File, HTTPException
from huggingface_hub import hf_hub_download, upload_file
import os

app = FastAPI()

HUGGING_FACE_TOKEN = os.getenv("HUGGING_FACE_TOKEN")
HUGGING_FACE_REPO_ID = os.getenv("HUGGING_FACE_REPO_ID")

@app.post("/upload")
async def upload_model(model: UploadFile = File(...)):
    if not HUGGING_FACE_TOKEN or not HUGGING_FACE_REPO_ID:
        raise HTTPException(status_code=500, detail="Hugging Face credentials not configured")

    try:
        with open(model.filename, "wb") as buffer:
            buffer.write(model.file.read())
        
        upload_file(
            path_or_fileobj=model.filename,
            path_in_repo=model.filename,
            repo_id=HUGGING_FACE_REPO_ID,
            repo_type="model",
            token=HUGGING_FACE_TOKEN,
        )
        os.remove(model.filename)
        return {"message": f"Model {model.filename} uploaded to Hugging Face Hub"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/download/{model_name}")
async def download_model(model_name: str):
    if not HUGGING_FACE_REPO_ID:
        raise HTTPException(status_code=500, detail="Hugging Face repository not configured")
    
    try:
        model_path = hf_hub_download(
            repo_id=HUGGING_FACE_REPO_ID,
            filename=model_name,
            repo_type="model",
            token=HUGGING_FACE_TOKEN,
        )
        return {"model_path": model_path}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
