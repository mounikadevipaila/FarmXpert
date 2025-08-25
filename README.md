# 🌱 FarmXpert  

FarmXpert is a **full-stack smart agriculture platform** that empowers farmers and agri-enthusiasts with AI-driven tools to improve crop yield and decision-making.  
It integrates **crop recommendation, disease detection, fertilizer suggestions, climate insights, and an AI chatbot** into one user-friendly system.  

---

## ✨ Features  

- 🚜 **Crop Recommendation**  
  Suggests the most suitable crop based on soil nutrients (NPK), temperature, rainfall, and pH values.  

- 🌾 **Disease Detection**  
  Upload a crop image → AI identifies possible diseases and recommends treatment.  

- 🧪 **Fertilizer Suggestions**  
  Provides the best fertilizer type and usage for chosen crops.  

- ☁️ **Weather & Climate Info**  
  Real-time weather updates with geolocation support and nearby soil test center mapping.  

- 💬 **AI Chatbot**  
  Interactive assistant that guides farmers step-by-step for crop inputs, disease queries, and general help.  

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
