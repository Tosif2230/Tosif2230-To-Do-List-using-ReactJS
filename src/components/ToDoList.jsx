import ToDoItem from "./ToDoItem";

function ToDoList({ todos , toggleComplete }) {
      if (todos.length === 0){
        return <p>No todos added....</p>
      }

  return (
      <ul>
          {
            todos.map((todo)=> (
            <ToDoItem 
            key={todo.id}
            todo = {todo}     
            toggleComplete = {toggleComplete}   
            />
          ))
          }
    </ul>
  );
}

export default ToDoList;
