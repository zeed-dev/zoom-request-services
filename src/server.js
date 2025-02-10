const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const setupSwagger = require("./swagger");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Import routes
const authRoutes = require("./routes/authRoutes");
const requestRoutes = require("./routes/requestRoutes");

app.use("/auth", authRoutes);
app.use("/requests", requestRoutes);

// Setup Swagger
setupSwagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running at: http://localhost:${PORT}`);
    console.log(`📜 Swagger API Docs: http://localhost:${PORT}/api-docs`);
});