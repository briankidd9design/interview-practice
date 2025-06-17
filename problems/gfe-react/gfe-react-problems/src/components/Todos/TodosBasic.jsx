import { useState } from "react";
import Navigation from "../Navigation";
import "./todos.css";

export function TodoBasic() {
  const [tasks, setTasks] = useState([]);
  const [newTodo, setNewTodo] = useState(" ");
  // const [completed, setCompleted] = useState(alse);

  // let id= 0;
  // 2
  function handleAddTodo(e) {
    e.preventDefault();
    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), label: newTodo, completed: false },
    ]);
    setNewTodo("");
  }
  // handle delete function options
  function deleteTodo(id) {
    setTasks(tasks.filter((task) => task.id != id));
  }
  // Toggle todo
  const toggleTodo = (id) => {
    setTasks((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <>
    <h1>Todo Basic</h1>
      <input
        aria-label="enter new todo"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button disabled={!newTodo} onClick={handleAddTodo}>Add new todo</button>
      <ul>
        {tasks.map(({ id, label, completed }) => (
          <li className="todo-item" key={id}>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => toggleTodo(id)}
            />
            <span className={completed ? "todo-completed" : null}>{label}</span>
            <button onClick={() => deleteTodo(id)}>Delete todo</button>
          </li>
        ))}
      </ul>
    </>
  );
}
