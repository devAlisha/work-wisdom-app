const { default: mongoose } = require("mongoose");
const config = require("./envVariables");

const dbConnect = async () => {
  try {
    await mongoose.connect(config.DATABASE_URL);
    console.log("Database connected successfully");
  } catch (error) {
    process.exit(1);
  }
};
module.exports = dbConnect;
