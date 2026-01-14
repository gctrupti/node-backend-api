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

// start server
app.listen(3000, () => {
  console.log("Express server running on http://localhost:3000");
});
