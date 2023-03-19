const express = require("express");
const actorsRouter = require("./routers/actorsRouter");
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Hi Express");
});

server.use("/actors", actorsRouter);

const host = "127.0.0.1";
const port = 5000;
server.listen(port, host, () => {
  console.log(`Listening ${host}:${port} address`);
});
