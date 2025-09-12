import sys
import os
import io
import json
from dotenv import load_dotenv

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')

load_dotenv()

import google.generativeai as genai

# GEMINI API key
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    print(json.dumps({"error": "GEMINI_API_KEY not found"}))
    sys.exit(1)

genai.configure(api_key=api_key)

# Get image path from Node.js
if len(sys.argv) < 2:
    print(json.dumps({"error": "No image path provided"}))
    sys.exit(1)

image_path = sys.argv[1]
if not os.path.isfile(image_path):
    print(json.dumps({"error": f"File not found '{image_path}'"}))
    sys.exit(1)

with open(image_path, "rb") as f:
    image_data = f.read()

prompt = """
You are a plant disease expert.
Analyze the image and give a short, clear answer:
🌱 Plant: ...
🦠 Disease: ...
💊 Treatment: ...
🌿 Fertilizer: ...
Keep it under 6 lines.
"""

try:
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content([
        prompt,
        {"mime_type": "image/jpeg", "data": image_data}
    ])
    
    result_text = response.text.strip()
    # Return JSON for Node.js
    print(json.dumps({"disease_info": result_text}))

except Exception as e:
    print(json.dumps({"error": f"Error generating content: {e}"}))
    sys.exit(1)

