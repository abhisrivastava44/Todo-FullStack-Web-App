import TodoItem from "./todoItem";
import { TodoItemsContext } from "../store/todoItemsStore";
import { useContext, useState } from "react";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  const [filter, setFilter] = useState("All");

  if (todoItems.length === 0) {
    return null;
  }

  const filteredTasks = todoItems
    .filter((item) => {
      if (filter === "Active") return !item.completed;
      if (filter === "Completed") return item.completed;
      return true;
    })
    .sort((a, b) => {
      if (a.completed === b.completed) return 0;
      return a.completed ? 1 : -1;
    });

  const pendingCount = todoItems.filter((item) => !item.completed).length;

  return (
    <div className="mt-8 text-left">
      {/* TASKS LIST */}
      <div className="flex flex-col gap-1">
        {filteredTasks.map((item, index) => {
          const taskId = item.id || item._id || index;
          const taskName = item.name || item.task;
          const taskDate = item.dueDate || item.date;

          return (
            <TodoItem
              key={taskId}
              id={taskId}
              todoDate={taskDate}
              todoName={taskName}
              completed={item.completed}
            />
          );
        })}
      </div>

      {/* FOOTER */}
      <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between text-[14px]">
        {/* Filters */}
        <div className="flex gap-2 mb-4 sm:mb-0">
          {["All", "Active", "Completed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-2 py-1 rounded transition-colors text-slate-600 ${
                filter === f
                  ? "bg-[#e2e8f0] border border-slate-300 font-medium text-slate-800"
                  : "hover:bg-slate-100"
              }`}
            >
              [{f}]
            </button>
          ))}
        </div>

        {/* Pending Counter */}
        <div className="text-slate-800">
          {pendingCount} pending task{pendingCount !== 1 ? "s" : ""}
        </div>
      </div>
    </div>
  );
};

export default TodoItems;
