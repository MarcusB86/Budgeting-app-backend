// DEPENDENCIES
const express = require("express");

const cors = require("cors");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json())

app.use(cors());



const transactionsController = require("./controllers/transactionsController");


app.get("/", (req, res) => {
    res.send("Welcome to my fly ass budgeting app")
})


app.use("/transactions", transactionsController)



module.exports = app;