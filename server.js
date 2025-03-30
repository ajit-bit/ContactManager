const express = require("express");
const dotenv = require("dotenv").config(); // ✅ Load environment variables first
const errorHandler = require("./middleware/errorHandeler"); // Uses the misspelled filename
const connectDb = require("./config/dbConnection");

// Connect to database
connectDb();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/contacts", require("./Routes/contactRoute"));

// Error handling middleware (should be the last middleware)
app.use(errorHandler);

// Start the server
app.listen(port, () => {
    console.log(` Server is running on port ${port}`);
})
;