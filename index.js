require("dotenv").config(); // Load environment variables from .env file

const express = require("express"); // Import the Express library
const app = express(); // Create an instance of an Express application
const port = 8080; // Define the port number
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("This is Twitter route");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Page</h1>");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${port}`);
});
