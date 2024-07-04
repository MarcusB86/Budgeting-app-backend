const express = require("express");
const transaction = express.Router();
const transactionArray = require("../models/transaction");

transaction.get("/", (req, res) => {
    res.status(200).send(transactionArray);
})

transaction.get("/:id", (req, res) => {
    const { id } = req.params;
    const transaction = transactionArray.find(element => element.id === id)
    if (transaction) {
        res.status(200).send(transaction);
    } else {
        res.status(404).json({error: `Transaction with id: ${id} not found!`})
    }
})


module.exports = transaction