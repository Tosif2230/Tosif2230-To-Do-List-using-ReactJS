import "./App.css";
import Header from "./components/Header";
import { MdFormatListBulletedAdd } from "react-icons/md";
import ToDoList from "./components/ToDoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {

    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };
  return (
    <main>
      <section className="flex flex-col justify-center items-center bg-gray-200 rounded-3xl  ">
        <Header />
        <div>
          <input
            type="text"
            placeholder="Enter a Task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTodo();
            }}
            className="bg-stone-300 rounded-md text-center mt-1 p-0.5 w-80 hover:bg-white focus:bg-white"
          />

          <button
            onClick={addTodo}
            className="bg-blue-900 text-white rounded-md p-2 m-2 cursor-pointer"
          >
            <MdFormatListBulletedAdd />
          </button>
        </div>
        <div>
          <ToDoList todos={todos} />
        </div>
      </section>
    </main>
  );
}

export default App;
