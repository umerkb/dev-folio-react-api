const requestLogger = (req, res, next) => {
  console.log("Time: ", Date.now());
  console.log("Request: ", req.url);
  next();
};

module.exports.requestLogger = requestLogger;
