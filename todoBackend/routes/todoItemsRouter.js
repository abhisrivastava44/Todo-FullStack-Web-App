//core modules
import express from "express";
import * as todoItemsController from "../controllers/todoItemsController.js";

//external module
const todoItemsRouter = express.Router();

todoItemsRouter.get("/", todoItemsController.getTodoItems);
todoItemsRouter.post("/", todoItemsController.createTodoItem);
todoItemsRouter.delete("/:id", todoItemsController.deleteTodoItem);
todoItemsRouter.put("/:id/completed", todoItemsController.markCompleted);

export default todoItemsRouter;
