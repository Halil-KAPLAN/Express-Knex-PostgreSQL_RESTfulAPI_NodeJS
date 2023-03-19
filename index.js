const express = require("express");
const errorHandler = require("./middlewares/errorHandling");
const logger = require("./middlewares/logger");
const actorsRouter = require("./routers/actorsRouter");
const server = express();
server.use(express.json());

server.use(logger);
server.get("/", (req, res) => {
  res.send("Hi Express");
});

server.use("/actors", actorsRouter);


//TODO: error middleware is always used last
server.use(errorHandler);
const host = "127.0.0.1";1
const port = 5000;
server.listen(port, host, () => {
  console.log(`Listening ${host}:${port} address`);
});
