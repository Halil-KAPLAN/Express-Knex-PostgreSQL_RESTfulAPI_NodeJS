const logger = (req, res, next) => {
  const nowDate = new Date().toUTCString();
  console.log(`${nowDate} - ${req.method} - ${req.hostname}`);
  next();
};

module.exports = logger;
