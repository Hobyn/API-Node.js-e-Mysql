const express = require("express");
const tasksController = require("./controllers/taskController.js");
const taskMiddleware = require("./middlewares/tasksMiddleware.js");
const router = express.Router();

router.get("/tasks", tasksController.getAll);
router.post("/tasks", taskMiddleware.validateBody, tasksController.createTask);
router.delete("/tasks/:id", tasksController.deleteTask);
router.put(
  "/tasks/:id",
  taskMiddleware.validateBody,
  taskMiddleware.validateStatus,
  tasksController.updateTask
);

module.exports = router;
