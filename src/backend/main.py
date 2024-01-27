from transformers import AutoModelForCausalLM, AutoTokenizer
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from transformers import AutoTokenizer, AutoModel
from fastapi.middleware.cors import CORSMiddleware

def load_codebert_model():
    model_name = "microsoft/codebert-base"
    model = AutoModelForCausalLM.from_pretrained(model_name)
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    return model, tokenizer

app = FastAPI()

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CodeRequest(BaseModel):
    code: str

model, tokenizer = load_codebert_model()

@app.post("/optimize-code")
def optimize_code(request: CodeRequest):
    try:
        input_code = request.code
        input_ids = tokenizer.encode(input_code, return_tensors="pt")

        # Generate optimized code
        output_ids = model.generate(input_ids)

        optimized_code = tokenizer.decode(output_ids[0], skip_special_tokens=True)

        return {"optimized_code": optimized_code}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))