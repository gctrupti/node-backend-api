const express = require("express");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(express.json());

// auth routes
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

// user routes
const userRoutes = require("./routes/users");
app.use("/users", userRoutes);

// task routes ✅ ONLY ONCE
const taskRoutes = require("./routes/tasks");
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
