const config = require("../config/envVariables");

const errorMiddleware = (error, req, res, next) => {
  console.error(`[Error]: ${error.message}`, error.stack);

  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
    ...(config.NODE_ENV === "development" && { stack: error.stack }), // Include stack trace in development mode
  });
};

module.exports = errorMiddleware;