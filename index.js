const express = require("express");
const app = express();
const loggers = require("./middlewares/loggers");
const menuRouter = require("./routes/menu");
const homeRouter = require("./routes/home");
const aboutRouter = require("./routes/about");
const servicesRouter = require("./routes/services");
const workRouter = require("./routes/work");
const contactRouter = require("./routes/contact");

app.use(express.json());
app.use(loggers.requestLogger);

app.use("/api/menus", menuRouter);
app.use("/api/home", homeRouter);
app.use("/api/about", aboutRouter);
app.use("/api/services", servicesRouter);
app.use("/api/contact", contactRouter);
app.use("/api/work", workRouter);

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
