const dotenv = require("dotenv").config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./dbConfig')
const authRouter = require('./routers/userRouter')
const app = express();
const PORT = 5000;
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth',authRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
