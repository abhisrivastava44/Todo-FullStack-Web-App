import { createContext, useEffect, useReducer } from "react";
import {
  addItemToServer,
  getItemsFromServer,
  deleteItemFromServer,
  toggleItemOnServer, // We will add this to your service file next
} from "../services/itemService";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
  toggleItem: () => {}, // Added to context signature
});

const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      {
        name: action.payLoad.item.name,
        dueDate: action.payLoad.item.dueDate,
        id: action.payLoad.item.id,
        completed: action.payLoad.item.completed || false, // Ensure completed state exists
      },
    ];
  }

  if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.id !== action.payLoad.id,
    );
  }

  // NEW: Handle checking/unchecking a task
  if (action.type === "TOGGLE_ITEM") {
    newTodoItems = currentTodoItems.map((item) =>
      item.id === action.payLoad.id
        ? { ...item, completed: action.payLoad.completed }
        : item,
    );
  }

  if (action.type === "SET_ITEMS") {
    return action.payLoad.items;
  }

  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  useEffect(() => {
    getItemsFromServer()
      .then((items) => {
        console.log("Items loaded from server:", items);
        dispatchTodoItems({ type: "SET_ITEMS", payLoad: { items } });
      })
      .catch((error) => {
        console.error("Error loading items from server:", error);
      });
  }, []);

  const addNewItem = async (itemName, itemDueDate) => {
    const newItem = await addItemToServer(itemName, itemDueDate);
    dispatchTodoItems({
      type: "NEW_ITEM",
      payLoad: { item: newItem },
    });
  };

  const deleteItem = async (id) => {
    await deleteItemFromServer(id);
    dispatchTodoItems({
      type: "DELETE_ITEM",
      payLoad: { id },
    });
  };

  // NEW: Function to handle the toggle
  const toggleItem = async (id) => {
    // 1. Find the current item to know its current completed status
    const itemToToggle = todoItems.find((item) => item.id === id);
    if (!itemToToggle) return;

    const newCompletedStatus = !itemToToggle.completed;

    // 2. Update the backend
    await toggleItemOnServer(id, newCompletedStatus);

    // 3. Update the UI state
    dispatchTodoItems({
      type: "TOGGLE_ITEM",
      payLoad: { id, completed: newCompletedStatus },
    });
  };

  return (
    <TodoItemsContext.Provider
      value={{ todoItems, addNewItem, deleteItem, toggleItem }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
