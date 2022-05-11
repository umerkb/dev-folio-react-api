const express = require("express");
const app = express();
const menuRouter = require("./routes/menu");
const loggers = require("./middlewares/loggers");

app.use(express.json());
app.use(loggers.requestLogger);
app.use("/api/menus", menuRouter);

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
