const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json())

app.use(cors());



const transactionsController = require("./controllers/transactionsController");


app.get("/", (req, res) => {
    res.send("Welcome to my Budgeting App, let us start doing stuff!!")
})


app.use("/transactions", transactionsController)



module.exports = app;