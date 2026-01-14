const express = require("express");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(express.json());

// ⬇️ THIS MUST EXIST
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

// ⬇️ existing user routes
const userRoutes = require("./routes/users");
app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
