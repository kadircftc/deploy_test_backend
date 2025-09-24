const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// JSON parse middleware
app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
  res.send("Hello World from Node.js 🚀");
});

// Example API endpoint
app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Kadir" },
    { id: 2, name: "Eren" },
    { id: 3, name: "Ahmet" }
  ]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is o running on http://localhost:${PORT}`);
});
