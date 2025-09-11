const { Schema, model } = require('mongoose');

const TransactionScheme = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  amount: { 
    type: Number, 
    required: true 
  }, 
  date: { 
    type: Date, 
    required: true 
  },
  category: { 
    type: String, 
    required: true, 
    trim: true }
}, { timestamps: true }
);

const TransactionModel = model("transaction", TransactionScheme)

module.exports = TransactionModel