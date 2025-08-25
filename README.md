# 🌱 FarmXpert  

FarmXpert is a **full-stack smart agriculture platform** that empowers farmers and agri-enthusiasts with AI-driven tools to improve crop yield and decision-making.  
It integrates **crop recommendation, disease detection, fertilizer suggestions, climate insights, and an AI chatbot** into one user-friendly system.  

---

## ✨ Features  

 - 🏢 **Nearest Soil Testing Center**  
  Locates and displays the nearest soil testing centers on an interactive map, helping farmers access soil health services.
<img width="961" height="456" alt="image" src="https://github.com/user-attachments/assets/e475fc76-340d-4ab4-a7c1-255ce7f9c84c" />


- 🚜 **Crop Recommendation**  
  Suggests the most suitable crop based on soil nutrients (NPK), temperature, rainfall, and pH values.
  <img width="976" height="463" alt="image" src="https://github.com/user-attachments/assets/a367401c-1965-44c4-8723-44315080ef45" />
 

- 🌾 **Disease Detection**  
  Upload a crop image → AI identifies possible diseases and recommends treatment.
  <img width="976" height="463" alt="image" src="https://github.com/user-attachments/assets/54992292-f792-4394-9073-a96d2cc71e0f" />


- 🧪 **Fertilizer Store**  
  Provides the best fertilizers.
  <img width="974" height="470" alt="image" src="https://github.com/user-attachments/assets/0feadb0f-cbcd-4edd-bf6e-a08b6f95b768" />
  

- ☁️ **Weather & Climate Info**  
  Real-time weather updates with geolocation support and nearby soil test center mapping.
  <img width="975" height="464" alt="image" src="https://github.com/user-attachments/assets/6e56eea4-7218-497b-9237-8ea97f306fa1" />


- 💬 **AI Chatbot**  
  Interactive assistant that guides farmers step-by-step for crop inputs, disease queries, and general help.
  <img width="975" height="467" alt="image" src="https://github.com/user-attachments/assets/6c34ccf6-ac8c-40b8-82c5-e38f0f3e19de" />


---

## 🛠 Tech Stack  

**Frontend:**  
- React.js  
- Tailwind CSS / Custom CSS  
- Axios (API integration)  

**Backend:**  
- Node.js & Express.js  
- MongoDB (Database)  
- Python (Flask API for ML models)  

**Machine Learning Models:**  
- Crop Recommendation (Classification using NPK, temperature, rainfall, pH)  
- Disease Detection (CNN model trained on plant disease dataset)  

---

## 📂 Project Structure  

FarmXpert/
│── Backend/ # Express + MongoDB APIs
│── MLModels/ # Crop recommendation & disease detection models
│── React/ # Frontend (React + Tailwind)
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Crop, Disease, Chatbot, Weather pages
│ │ └── App.jsx
│ └── package.json
│── README.md # Project documentation

---

## 🚀 Getting Started  

### 🔹 Prerequisites  
- [Node.js](https://nodejs.org/) (v16+)  
- [MongoDB](https://www.mongodb.com/)  
- [Python](https://www.python.org/) (for ML APIs)  

### 🔹 Clone the Repository  
```bash
git clone https://github.com/mounikadevipaila/FarmXpert.git
cd FarmXpert
🔹 Backend Setup
cd Backend
cd testing
npm install
node server.js
🔹 Frontend Setup
cd React
cd tester
npm run dev
🔹 ML Model API Setup
cd Backend
cd testing
py app.py
