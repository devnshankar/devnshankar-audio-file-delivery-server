import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import dotenv from 'dotenv';


const app = express();
dotenv.config();
const PORT = process.env.PORT || 3004;

// Get the directory name
const __dirname = dirname(fileURLToPath(import.meta.url));

// Serve the text.txt file
app.get("/download", (req, res) => {
  const filePath = join(__dirname, "meow.mp3");
  res.download(filePath, "meow.mp3");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
