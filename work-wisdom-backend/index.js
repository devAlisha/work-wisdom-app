const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./config/dbConfig");
const errorMiddleware = require("./middlewares/errorMiddleware");
const routes = require("./routes/routes");
const config = require("./config/envVariables");

app.use(express.json());

app.use(cors({ origin: config.ORIGIN }));

const port = config.PORT || 8000;

dbConnect();

app.use(routes);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Starting Server...`);
});
