import express from "express";
import dotenv from "dotenv";
require("./models/db")
const bodyParser = require('body-parser')
const cors = require('cors')
const authRouter = require("./routes/auth.routes")

// Load environment variables
dotenv.config();

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/auth", authRouter)

app.use(bodyParser.json())

app.use(cors())

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
