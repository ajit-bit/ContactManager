const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        mongoose.set("strictQuery", false); // Prevent deprecation warnings

        if (!process.env.CONNECTION_STRING) {
            throw new Error("Missing database connection string in environment variables");
        }

        const connect = await mongoose.connect(process.env.CONNECTION_STRING);

        console.log(
            `Database connected: ${connect.connection.host} - ${connect.connection.name}`
        );
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1); 
    }
};

module.exports = connectDb;
