const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

const app = express();

// ✅ CORS MUST BE BEFORE ROUTES
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://node-backend-api-9iw2.onrender.com",
    ],
    credentials: true,
  })
);

app.use(express.json());

// routes
app.use("/auth", require("./routes/auth"));
app.use("/users", require("./routes/users"));
app.use("/tasks", require("./routes/tasks"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
