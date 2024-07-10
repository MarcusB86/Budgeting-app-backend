const express = require("express");
const transaction = express.Router();
const transactionArray = require("../models/transaction");
const { nanoid } = required("nanoid")

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

transaction.post("/", (req,res) => {
    const newTransaction = {id: nanoid(4) , ...req.body}
    transactionArray.push(newTransaction);
    res.status(201).send(transactionArray[transactionArray.length - 1])
})

transaction.delete("/:id", (req, res) => {
    const { id } = req.params;
    const deleteTransaction = transactionArray.findIndex(element => element.id === id)
    
    if (deleteTransaction !== -1) {
        transactionArray.splice(deleteTransaction, 1)
        res.redirect("/transactions")
    } else  {
        res.status(404).send({error: `Transaction with id: ${id} not found!`})
    }
})

transaction.put("/:id", (req, res) => {
    const { id } = req.params;
    const updateTransaction = transactionArray.findIndex(transaction => transaction.id === id)
  
    if (updateTransaction !== -1) {
      transactionArray[updateTransaction] = req.body
      res.status(200).json(transactionArray[updateTransaction])
    } else {
      res.status(404).send({error: `Transaction with id: ${id} not found!`})
    }
  })


module.exports = transaction