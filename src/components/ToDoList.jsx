import ToDoItem from "./ToDoItem";

function ToDoList({ todos , toggleComplete ,editTodo , deleteTodo }) {
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
            editTodo = {editTodo}
            deleteTodo = {deleteTodo} 
            />
          ))
          }
    </ul>
  );
}

export default ToDoList;
