const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
    // Ensure status is properly set
    const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

    res.status(statusCode).json({
        title: getErrorTitle(statusCode),
        message: err.message,
        stackTrace: process.env.NODE_ENV === "development" ? err.stack : undefined
    });
};

// Helper function to map error codes to titles
const getErrorTitle = (statusCode) => {
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            return "Validation Error";
        case constants.NOT_FOUND:
            return "Not Found";
        case constants.UNAUTHORIZED:
            return "Unauthorized";
        case constants.FORBIDDEN:
            return "Forbidden";
        case constants.SERVER_ERROR:
            return "Server Error";
        default:
            return "Unknown Error";
    }
};

module.exports = errorHandler;
