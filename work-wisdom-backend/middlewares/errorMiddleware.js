const errorMiddleware = (error, req, res, next) => {
  console.log(error); // Log the error for debugging purposes

  if (error.name === "ValidationError") {
    // Handle Mongoose validation errors
    const errors = {};
    for (let field in error.errors) {
      errors[field] = error.errors[field].message;
    }
    return res.status(400).json({ message: "Validation Error", errors });
  }

  if (error.name === "CastError") {
    // Handle Mongoose cast errors (e.g., invalid ObjectId)
    return res.status(400).json({ message: "Invalid ID" });
  }

  // Check if the error is a known type, e.g., a specific HTTP status code
  if (error instanceof CustomErrorType) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  // For other unknown errors, return a generic 500 Internal Server Error response
  return res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = errorMiddleware;
