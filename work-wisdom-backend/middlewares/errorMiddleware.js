const errorMiddleware = (error, req, res) => {
  console.error(error);

  if (error.statusCode && error.message) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  return res.status(500).json({ message: "Internal Server Error" });
};

module.exports = errorMiddleware;
