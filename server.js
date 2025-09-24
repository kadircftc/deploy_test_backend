require('dotenv').config(); // .env dosyasını oku
const express = require("express");
const app = express();

// Port: önce -p argümanı, sonra process.env.PORT, sonra default 3000
let PORT = process.env.PORT || 3000;
const portArgIndex = process.argv.indexOf("-p");
if (portArgIndex > -1) {
  PORT = parseInt(process.argv[portArgIndex + 1]);
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from Node.js 🚀");
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Kadir" },
    { id: 2, name: "Eren" },
    { id: 3, name: "Ahmet" },
    { id: 4, name: "TEST" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
