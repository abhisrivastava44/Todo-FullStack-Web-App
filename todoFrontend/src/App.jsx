import AppName from "./components/appName";
import AddTodo from "./components/addTodo";
import TodoItems from "./components/TodoItems";
import WelComeMessage from "./components/welcomeMessage";
import "./app.css";
import TodoItemsContextProvider from "./store/todoItemsStore";

function App() {
  return (
    <TodoItemsContextProvider>
      <div className="min-h-screen bg-[#f1f5f9] py-16 px-4 sm:px-6 flex justify-center font-sans">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8 sm:p-10 h-fit">
          <AppName></AppName>
          <AddTodo></AddTodo>
          <WelComeMessage></WelComeMessage>
          <TodoItems></TodoItems>
        </div>
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
