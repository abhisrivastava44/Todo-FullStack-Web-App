import { useContext, useState } from "react";
import { TodoItemsContext } from "../store/todoItemsStore";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    if (!todoName.trim()) return;
    addNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <form className="mb-10 w-full" onSubmit={handleAddButtonClicked}>
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <input
          type="text"
          className="flex-1 min-w-0 px-4 py-2.5 bg-white border border-slate-300 text-slate-800 rounded-full focus:outline-none focus:border-slate-400 placeholder-slate-400 text-[15px]"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          placeholder="Add a new task..."
          required
        />

        <input
          type="date"
          className="w-full sm:w-auto px-4 py-2.5 bg-white border border-slate-300 text-slate-500 rounded-full focus:outline-none focus:border-slate-400 text-[15px] cursor-pointer"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full sm:w-auto shrink-0 flex items-center justify-center bg-[#152e4d] hover:bg-[#0f2138] text-white font-medium py-2.5 px-6 rounded-full transition-colors text-[15px]"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
