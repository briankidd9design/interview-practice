import { useState } from "react";
import Navigation from "../Navigation";
import "./todos.css";

export function TodoSimple() {
  //1. keep state of both the tasks and the userinput
  //2. user can create a new todo with a button click associated with an input box
  //3. user can delete todo on a button click
  //4. user will see the todo on the UI

  //1.
  const [tasks, setTasks] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // handle user addNewTask
  // 2
  function handleNewTask(e) {
    e.preventDefault();
    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), todoLabel: newTodo.trim() },
    ]);
    setNewTodo("");
  }
  // handle user delete todo
  // 3
  function deleteTodo(id) {
    setTasks(tasks.filter((task) => task.id != id));
  }

  return (
    <>
      <h1>Todo list</h1>
      {/* 2 */}
      <input
        aria-label="enter your new todo item"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value).trim()}
      />
      <button disabled={!newTodo} onClick={handleNewTask}>
        Add new todo
      </button>
      <ul>
        {/* 4 */}
        {tasks.map(({ id, todoLabel }) => (
          <>
            <li key={id}>
              {/* 3 */}
              {todoLabel}{" "}
              <button onClick={() => deleteTodo(id)}>Delete Todo</button>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
