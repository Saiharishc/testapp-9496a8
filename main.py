from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "API is running"}

@app.get("/test")
def test_endpoint():
    return {"message": "Test successful"}
