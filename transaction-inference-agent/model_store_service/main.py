import os
import boto3
from fastapi import FastAPI, UploadFile, File, HTTPException
from botocore.exceptions import NoCredentialsError

app = FastAPI()

AWS_ACCESS_KEY_ID = os.environ.get("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.environ.get("AWS_SECRET_ACCESS_KEY")
S3_BUCKET_NAME = os.environ.get("S3_BUCKET_NAME")

s3_client = boto3.client(
    's3',
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY
)

@app.post("/upload/")
async def upload_model(file: UploadFile = File(...)):
    try:
        s3_client.upload_fileobj(file.file, S3_BUCKET_NAME, file.filename)
        return {"message": "Model uploaded successfully"}
    except NoCredentialsError:
        raise HTTPException(status_code=401, detail="AWS credentials not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/download/{model_name}")
async def download_model(model_name: str):
    try:
        response = s3_client.get_object(Bucket=S3_BUCKET_NAME, Key=model_name)
        return response["Body"].read()
    except NoCredentialsError:
        raise HTTPException(status_code=401, detail="AWS credentials not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
