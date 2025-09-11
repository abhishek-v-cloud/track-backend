const express = require('express')
const { createTransaction, getTransactionById, getAllTransaction, updateTransaction, deleteTransaction } = require('../controller/TransactionController')
const router = express.Router()

// APIs
router.post("/", createTransaction);
router.get("/", getAllTransaction);
router.get("/:id", getTransactionById);
router.put("/:id", updateTransaction);
router.delete("/:id", deleteTransaction);

module.exports = router