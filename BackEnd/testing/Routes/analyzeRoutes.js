const express = require("express");
const { spawn } = require("child_process");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() }); // store in memory

router.post("/analyze", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No image uploaded" });

  const tempPath = path.join(__dirname, "../uploads", `${Date.now()}-${req.file.originalname}`);
  fs.writeFileSync(tempPath, req.file.buffer);

  // Use `py` instead of `python` on Windows
  const pythonProcess = spawn("py", ["./app.py", tempPath]);

  let result = "";
  pythonProcess.stdout.on("data", (data) => {
    result += data.toString();
  });

  pythonProcess.stderr.on("data", (err) => {
    console.error("Python error:", err.toString());
  });

  pythonProcess.on("close", (code) => {
    fs.unlink(tempPath, (err) => {
      if (err) console.error("Failed to delete temp file:", err);
    });
    if (code !== 0) {
      return res.status(500).json({ error: "Python script failed" });
    }
    res.json({ result });
  });
});

module.exports = router;
