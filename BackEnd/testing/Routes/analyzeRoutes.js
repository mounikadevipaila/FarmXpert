const express = require("express");
const { spawn } = require("child_process");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// Store uploaded file in memory first
const upload = multer({ storage: multer.memoryStorage() });

// POST /api/analyze
router.post("/analyze", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No image uploaded" });
  }

  // Ensure uploads directory exists
  const tempDir = path.join(__dirname, "../uploads");
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

  // Save the uploaded image temporarily
  const tempPath = path.join(tempDir, `${Date.now()}-${req.file.originalname}`);
  fs.writeFileSync(tempPath, req.file.buffer);

  // Spawn Python process (use python3 for Linux/Render)
  const pythonProcess = spawn("python3", ["./app.py", tempPath]);

  let output = "";
  let errors = "";

  pythonProcess.stdout.on("data", (data) => {
    output += data.toString();
  });

  pythonProcess.stderr.on("data", (data) => {
    errors += data.toString();
    console.error("Python error:", data.toString());
  });

  pythonProcess.on("close", (code) => {
    // Delete temporary file
    fs.unlink(tempPath, (err) => {
      if (err) console.error("Failed to delete temp file:", err);
    });

    if (code !== 0 || errors) {
      return res.status(500).json({ error: errors || "Python script failed" });
    }

    // Parse Python script output
    try {
      // Ensure your Python script prints a valid JSON string, e.g., {"disease": "Powdery Mildew"}
      const resultJSON = JSON.parse(output);
      res.status(200).json({ result: resultJSON });
    } catch (err) {
      console.error("Failed to parse Python output:", err);
      res.status(500).json({ error: "Invalid output from Python script" });
    }
  });
});

module.exports = router;
