# Backend - Personal Finance Tracker

This is the **backend** for the Personal Finance Tracker built using **Node.js, Express, and MongoDB**.  
It provides REST API endpoints for managing transactions.

---

## Features

- Create, Read, Update, Delete (CRUD) transactions
- Filter transactions by category and date range
- Beginner-friendly code structure
 ---

## Setup Instructions

 - npm install
 - npm run dev
 - 
 ---
 
## Project Structure

- backend/
- ├─ models/
- │ └─ TransactionModel.js # Mongoose schema for transactions
- ├─ controllers/
- │ └─ transactionController.js # CRUD functions and logic
- ├─ routes/
- │ └─ transactionRoutes.js # API routes
- ├─ app.js # Entry point of backend server
- ├─ db.js # Connection tyo Mongodb
- ├─ package.json
- └─ .env # Environment variables

---

## APIs

- POST = https://track-backend-eta.vercel.app/api/transactions/ = Create a new transaction
- GET = https://track-backend-eta.vercel.app/api/transactions/ = Get all transactions (with filters)
- GET = https://track-backend-eta.vercel.app/api/transactions/:id = Get a single transaction by ID
- PUT = https://track-backend-eta.vercel.app/api/transactions/:id = Update a transaction by ID
- DELETE = https://track-backend-eta.vercel.app/api/transactions/:id = Delete a transaction by ID
