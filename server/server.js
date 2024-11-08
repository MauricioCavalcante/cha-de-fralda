require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/config", (req, res) => {
  res.json({ sheetURL: process.env.SHEET_URL });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
