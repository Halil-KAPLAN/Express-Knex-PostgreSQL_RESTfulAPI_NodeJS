const express = require("express");
const data = require("./data");
const server = express();

const host = "127.0.0.1";
const port = 3000;

server.get("/", (req, res) => {
  res.send("Hi Express");
});

server.get("/actors", (req, res) => {
  res.status(200).json(data);
});

server.get("/actors/:id", (req, res) => {
  const { id } = req.params;
  const actor = data.find((actor) => actor.id === parseInt(id));
  if (actor) {
    res.status(200).json(actor);
  } else {
    res.status(404).send("Actor is not found!");
  }
});

server.listen(port, host, () => {
  console.log(`Listening ${host}:${port} address`);
});
