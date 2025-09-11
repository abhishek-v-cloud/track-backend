const express = require('express')
const connectDB = require('./db');
const dotenv = require('dotenv');
const cors = require("cors");
const TransactionRoute = require('./routes/TransactionRoute');

dotenv.config();

const app = express()
app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 5000;

connectDB();

app.use("/api/transactions", TransactionRoute);

app.listen(PORT, () => {
    console.log(`server is running at this port ${PORT}`);
})
