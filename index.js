require('dotenv').config();
const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/rickAndMorty.route");
const connectToDataBase = require("./src/database/database");

const port = process.env.PORT || 3000;
const app = express();

connectToDataBase();
app.use(express.json());
app.use(cors());
app.use("/characters", routes);

app.listen(port, () => {
  console.log(`servidor rodando na porta:${port}`);
});
