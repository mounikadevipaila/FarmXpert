import sys
import os
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    print("❌ Error: GEMINI_API_KEY not found")
    sys.exit(1)

genai.configure(api_key=api_key)

# Get image path from Node.js
if len(sys.argv) < 2:
    print("❌ Error: No image path provided")
    sys.exit(1)

image_path = sys.argv[1]

if not os.path.isfile(image_path):
    print(f"❌ Error: File not found '{image_path}'")
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
    print(response.text.strip())
except Exception as e:
    print(f"❌ Error generating content: {e}")
    sys.exit(1)
