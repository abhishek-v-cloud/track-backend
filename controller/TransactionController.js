const TransactionModel = require('../model/TransactionModel')

// Carete Transaction
const createTransaction = async (req, res) => {
    try {
        const { title, amount, date, category } = req.body;
        const transactionQuery = new TransactionModel({ title, amount, date, category });
        const addTransaction = await transactionQuery.save();
        res.status(201).json({
            status: "Success",
            message: "Transaction Added",
            addTransaction,
        });
    } catch (err) {
        res.status(400).json({
            status: "Failure",
            message: err.message
        });
    }
}


// Get all transactions with optional filters (category, from, to)
const getAllTransaction = async (req, res) => {
    try {
        const { category, from, to } = req.query;
        const filter = {};

        // Filter by category (case-insensitive)
        if (category) filter.category = { $regex: new RegExp(category, "i") };

        // Filter by date range
        if (from || to) {
            filter.date = {};
            if (from) filter.date.$gte = new Date(from);
            if (to) filter.date.$lte = new Date(to);
        }

        const transactions = await TransactionModel.find(filter).sort({ date: -1 });

        res.status(200).json({ status: "Success", transactions });
    } catch (err) {
        const { message } = err;
        res.status(500).json({ status: "Failure", message });
    }
};

// Get transaction by ID
const getTransactionById = async (req, res) => {
    try {
        const { id } = req.params;
        const transaction = await TransactionModel.findById(id);

        if (!transaction) {
            return res.status(404).json({ status: "Failure", message: "Transaction not found" });
        }

        res.status(200).json({ status: "Success", transaction });
    } catch (err) {
        const { message } = err;
        res.status(500).json({ status: "Failure", message });
    }
};

// Update a transaction 
const updateTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await TransactionModel.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!updated) {
            return res.status(404).json({ status: "Failure", message: "Transaction not found" });
        }

        res.status(200).json({ status: "Success", updated });
    } catch (err) {
        const { message } = err;
        res.status(400).json({ status: "Failure", message });
    }
};

// Delete a transaction by ID
const deleteTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const removed = await TransactionModel.findByIdAndDelete(id);

        if (!removed) {
            return res.status(404).json({ status: "Failure", message: "Transaction not found" });
        }

        res.status(200).json({ status: "Success", message: "Transaction deleted successfully" });
    } catch (err) {
        const { message } = err;
        res.status(500).json({ status: "Failure", message });
    }
};

module.exports = {
    createTransaction,
    getAllTransaction,
    getTransactionById,
    updateTransaction,
    deleteTransaction
};
