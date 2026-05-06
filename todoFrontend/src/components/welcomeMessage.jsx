import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsStore";

const WelComeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && (
      <div className="py-12 text-center mt-4">
        <p className="text-slate-500 font-medium text-sm">
          No tasks left. Add a new task to get started!
        </p>
      </div>
    )
  );
};

export default WelComeMessage;
