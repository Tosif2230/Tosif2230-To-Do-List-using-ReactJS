import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";

function ToDoList({ todos }) {
  return (
    <ul className="m-4">
      {todos.length === 0 ? (
        <p className="text-gray-500">No tasks added yet</p>
      ) : (
        todos.map((todo, id) => (

          <li  key={id} className="flex text-center bg-white rounded-md gap-10">
            {todo}

            <div>
              <button className="gap-2">
                <FaEdit />
              </button>
              <button>
                <MdOutlineDeleteOutline />
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

export default ToDoList;
