const router = require("express").Router();
const Todos = require("../models/todo.model");

router.get("/all", (req, res) => {
  Todos.find({ userId: req.user })
    .then((todo) => {
      res.json(todo);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

router.post("/", (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "title required",
    });
    return;
  }
  if (!req.body.description) {
    res.status(400).send({
      message: "description required",
    });
    return;
  }
  const todo = new Todos({
    title: req.body.title,
    description: req.body.description,
  });
  todo
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
});

router.put("/:id", (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "upadat empty",
    });
  }
  const id = req.params.id;
  Todos.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then((data) => {
      if (!data) {
        res.status(401).send({
          message: "cannot update the todo",
        });
      } else res.send({ message: "Todos updated successfully", todo: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error in updated id =" + id,
      });
    });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let del = await Todos.findByIdAndDelete(id);
    // console.log("🚀 ~ router.delete ~ del:", del);
    if (!del) {
      res.status(404).send({
        message: "con't delete ",
      });
    }
    res.status(200).json({
      message: "deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

module.exports = router;
