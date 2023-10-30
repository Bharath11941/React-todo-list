import { useEffect, useState } from "react";
import "./style.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { CompletedTodo } from "./CompletedTodo";

export default function App() {
  const [toDos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(toDos));
  }, [toDos]);

  function addTodo(title) {
    setToDos((currentToDos) => {
      return [
        ...currentToDos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setToDos((currentToDos) => {
      return currentToDos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }
  function deleteList(id) {
    setToDos((currentToDos) => {
      return currentToDos.filter((todo) => todo.id !== id);
    });
  }

  function deleteAlltodos(){
    setToDos([])
  }
  return (
    //fragment <> </>-in jsx we only want to return a element.if we don't want wrapp it on the div.We can use fragment
    <>
      <TodoForm onSubmit={addTodo} />
      <h1 className="header">Todo list</h1>
      <TodoList toDos={toDos} toggleTodo={toggleTodo} deleteList={deleteList} />
      <button onClick={deleteAlltodos}>Delete all todos</button>
      <h1 className="header">Completed Todo</h1>
      <ul className="list">
      {toDos.length === 0 && "NO COMPLETED TODOS"}
        {toDos.map((todo) => {
          return <CompletedTodo {...todo} />;
        })}
      </ul>
    </>
  );
}
