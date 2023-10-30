import { TodoItem } from "./TodoItem";

export function TodoList({toDos,toggleTodo,deleteList}){
  return (
    <ul className="list">
    {toDos.length === 0 && "NO TODOS"}
    {toDos.map((todo) => {
      return (
        <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteList={deleteList}/>
      );
    })}
  </ul>
  )
}
