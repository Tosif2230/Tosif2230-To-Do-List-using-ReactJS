import { useState } from "react";
import checked_icon from "../assets/checked.png";
import UncheckedIcon from "../assets/unchecked.png";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { IoIosSave } from "react-icons/io";


function ToDoItem({ todo, toggleComplete , editTodo , deleteTodo}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

 const handleSave = () => {
    if (editValue.trim() !== "") {
      editTodo(todo.id, editValue.trim());
      setIsEditing(false);
    }
  };

  return (
    <li className="flex justify-between items-center bg-white rounded-md m-3 p-3 w-80">
      <img
        className="cursor-pointer"
        src={todo.completed ? checked_icon : UncheckedIcon}
        alt="complete"
        width="20"
        onClick={() => toggleComplete(todo.id)}

      />

      {isEditing ? (
        <input
          className="border border-gray-300 rounded"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          autoFocus
        />
      ) : (
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.text}
        </span>
      )}
      <div className="flex gap-2">
        {isEditing ? (
          <button
            className="text-green-600 rounded"
            onClick={handleSave}
          >
            <IoIosSave />
          </button>
        ) : (
          <button className="m-1-p1 hover:text-yellow-500 cursor-pointer" onClick={() => setIsEditing(true)}>
            <FaRegEdit />
          </button>
        )}
        <button className="m-1-p1 hover:text-red-600 cursor-pointer" onClick={() => deleteTodo(todo.id)}>
          <MdDeleteSweep />
        </button>
      </div>
      
    </li>
  );
}

export default ToDoItem;
