import checked_icon from "../assets/checked.png";
import UncheckedIcon from "../assets/unchecked.png";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

function ToDoItem({ todo, toggleComplete }) {
  return (
    <li className="flex justify-between items-center bg-white rounded-md m-3 p-3 w-80">
      <img
        className="cursor-pointer"
        src={todo.completed ? checked_icon : UncheckedIcon}
        alt="complete"
        width="20"
        onClick={() => toggleComplete(todo.id)}

      />
      <span className={todo.completed ? "line-through text-gray-500" : ""}>
        {todo.text}
      </span>
      <div className="flex gap-2">
        <button>
          <FaRegEdit />
        </button>
        <button>
          <MdDeleteSweep />
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
