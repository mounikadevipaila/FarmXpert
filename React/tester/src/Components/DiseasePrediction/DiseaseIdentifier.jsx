import React, { useState } from "react";
import axios from "axios";
import "./DiseaseIdentifier.css";

function DiseaseIdentifier() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreviewUrl(selectedFile ? URL.createObjectURL(selectedFile) : null);
    setResult(""); // clear previous result
    setError(""); // clear previous error
  };

  const handleUpload = async () => {
    if (!file) {
      setError("❌ Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);
      setError("");
      setResult("");

      // Replace with your live backend URL if deployed
      const response = await axios.post(
        "https://disease-analyzer.onrender.com/api/analyze",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.result) {
        setResult(response.data.result);
      } else {
        setError("❌ No result returned from server.");
      }
    } catch (err) {
      console.error(err);
      setError(
        "❌ Error uploading image: " + (err.response?.data?.error || err.message)
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="farm_app-container">
      <h2>AI Plant Disease Identifier</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="farm_file-input"
      />

      {previewUrl && (
        <img src={previewUrl} alt="Preview" className="farm_image-preview" />
      )}

      <button
        onClick={handleUpload}
        className="farm_analyze-btn"
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {error && <div className="farm_error">{error}</div>}

      {result ? (
        <div className="farm_result-card">
          {result.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      ) : (
        !error && <div className="farm_result-box">Results will appear here...</div>
      )}
    </div>
  );
}

export default DiseaseIdentifier;
