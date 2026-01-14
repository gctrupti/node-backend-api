const connectDB = require("./config/db");

connectDB();

const express = require("express");

const app = express();

// middleware
app.use(express.json());

// basic routes
app.get("/", (req, res) => {
  res.send("Express backend is live 🚀");
});

app.get("/about", (req, res) => {
  res.send("This is backend built with Node + Express");
});

// import user routes
const userRoutes = require("./routes/users");

// use user routes
app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

