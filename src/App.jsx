import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: uuidv4(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <main>
      <section className="flex flex-col items-center m-5 p-5 bg-gray-200 rounded-3xl ">
        <Header />
        <div className="flex">
          <input
            className="flex items-center bg-white rounded-md m-1 p-1 w-80"
            type="text"
            placeholder="Enter a task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
          />
     
          <div>
          <button className="bg-blue-900 text-white rounded-md m-1 p-2 cursor-pointer" 
            onClick={addTodo}><MdFormatListBulletedAdd /></button>
            </div>
        </div>
      </section>
      <aside className="flex justify-center m-5 p-5 h-full bg-gray-200 rounded-3xl ">
        <ToDoList todos={todos} toggleComplete={toggleComplete} />
      </aside>
        
    </main>
  );
}

export default App;
