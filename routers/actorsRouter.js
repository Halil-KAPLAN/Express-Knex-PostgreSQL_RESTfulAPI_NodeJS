const router = require("express").Router();

let data = require("../data");

router.get("/", (req, res) => {
  res.status(200).json(data);
});

let testNextId = 4;
router.post("/", (req, res, next) => {
  let new_actor = req.body;
  if (!new_actor.name || !new_actor.films) {
    next({
      statusCode: 400,
      errorMessage: "You must use 'name' and 'films' to add new actor!",
    });
  } else {
    new_actor.id = testNextId;
    testNextId++;
    data.push(new_actor);
    res.status(201).json(new_actor);
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updateValues = req.body;

  const updatedActor = data.find((actor) => actor.id === Number(id));
  if (updatedActor) {
    let reportUpdated;
    data = data.map((actor) =>
      actor.id === Number(id)
        ? (reportUpdated = { ...actor, ...updateValues })
        : actor
    );
    res.status(200).json(reportUpdated);
  } else {
    res.status(404).json({ errorMessage: "Actor is not found!" });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const deletedActor = data.find((actor) => actor.id === Number(id));
  if (deletedActor) {
    data = data.filter((actor) => actor.id !== Number(deletedActor.id));
    res.status(204).end();
  } else {
    res.status(404).json({ errorMessage: "Actor is not found!" });
  }
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const actor = data.find((actor) => actor.id === parseInt(id));
  if (actor) {
    res.status(200).json(actor);
  } else {
    res.status(404).send("Actor is not found!");
  }
});

module.exports = router;
