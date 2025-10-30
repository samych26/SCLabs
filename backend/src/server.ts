import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => {
  res.json({ message: "SClabs API is running 🚀" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ SClabs backend running on port ${PORT}`));
