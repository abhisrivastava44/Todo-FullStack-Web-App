import TodoItem from "../models/todoItem.js";

// 1. GET ALL ITEMS (Mapped for Frontend)
export const getTodoItems = async (request, response) => {
  try {
    const todoItems = await TodoItem.find();
    // Convert DB fields (task, date, _id) to Frontend fields (name, dueDate, id)
    const formattedItems = todoItems.map((item) => ({
      id: item._id,
      name: item.task, // Crucial: mapping 'task' to 'name'
      dueDate: item.date, // Crucial: mapping 'date' to 'dueDate'
      completed: item.completed,
    }));
    response.json(formattedItems);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

// 2. CREATE ITEM (Mapped for Frontend)
export const createTodoItem = async (request, response) => {
  // Check if frontend sends 'itemName' or 'task'
  const { task, date } = request.body;
  try {
    const todoItem = new TodoItem({ task, date });
    await todoItem.save();

    // Return the mapped format so the Reducer can read it immediately
    response.status(201).json({
      id: todoItem._id,
      name: todoItem.task,
      dueDate: todoItem.date,
      completed: todoItem.completed,
    });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

// 3. DELETE ITEM
export const deleteTodoItem = async (request, response, next) => {
  const { id } = request.params;
  try {
    await TodoItem.findByIdAndDelete(id);
    response.status(204).end();
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

// 4. TOGGLE COMPLETED (Only one version!)
export const markCompleted = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  try {
    const updatedItem = await TodoItem.findByIdAndUpdate(
      id,
      { completed: completed },
      { new: true },
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    // Return mapped version
    res.status(200).json({
      id: updatedItem._id,
      name: updatedItem.task,
      dueDate: updatedItem.date,
      completed: updatedItem.completed,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
