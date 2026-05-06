import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { TodoItemsContext } from "../store/todoItemsStore";

function TodoItem({ todoName, todoDate, id, completed }) {
  const { deleteItem, toggleItem } = useContext(TodoItemsContext);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    } catch (error) {
      return dateString;
    }
  };

  return (
    <div className="flex items-center justify-between py-5 px-2 sm:px-4 border-b border-slate-200 hover:bg-slate-50 transition-colors rounded-lg mb-1">
      <div className="flex items-center gap-4 flex-1 overflow-hidden">
        {/* Custom Circular Checkbox */}
        <div className="relative flex items-center justify-center flex-shrink-0">
          <input
            type="checkbox"
            checked={completed || false}
            onChange={() => toggleItem && toggleItem(id)}
            className="peer appearance-none w-5 h-5 border border-slate-300 rounded-full checked:bg-[#2ea068] checked:border-[#2ea068] cursor-pointer transition-all"
            title="Mark as completed"
          />
          <svg
            className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Task Text and Date Pill */}
        <div className="flex-1 min-w-0 text-left flex items-center gap-3">
          <p
            className={`text-[15px] truncate ${
              completed ? "text-slate-400 line-through" : "text-slate-800"
            }`}
          >
            {todoName || "Unnamed task"}
          </p>
          {todoDate && (
            <span className="bg-[#e2e8f0] text-slate-600 text-xs px-2.5 py-1 rounded font-medium whitespace-nowrap">
              {formatDate(todoDate)}
            </span>
          )}
        </div>
      </div>

      {/* Delete Button */}
      <button
        type="button"
        className="ml-4 flex-shrink-0 text-[#c25050] hover:text-red-700 transition-colors p-1"
        onClick={() => deleteItem(id)}
        title="Delete task"
      >
        <MdDeleteOutline size={20} />
      </button>
    </div>
  );
}

export default TodoItem;
