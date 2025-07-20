// To add local storage
// 1. forset up a way to store the todos in a variable to local storage
// 2. If there is not value in stored then assign todos to the INITIAL_TODOS
// 3. return JSON.parse value of the stored variables
// 4. Set up the todos with a useEffect hook

import { useState, useEffect } from "react";

const INITIAL_TODOS = [
  { id: crypto.randomUUID(), todoLabel: "Walk the dog", completed: false },
  { id: crypto.randomUUID(), todoLabel: "Water the plants", completed: false },
  { id: crypto.randomUUID(), todoLabel: "Wash the dishes", completed: false },
];
export default function TodosLocalStorage() {
  // const [todos, setTodos] = useState(INITIAL_TODOS);
  const [todos, setTodos] = useState(() => {
    try {
      const stored = localStorage.getItem("todos");
      if (stored === null) return INITIAL_TODOS;
      return JSON.parse(stored);
    } catch (error) {
      console.error("There are no todos in local storage", error);
      return INITIAL_TODOS;
    }
  });

  const [newTodo, setNewTodo] = useState("");
  // setTodos with a useEffect hook
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // handle new todo
  function handleAddNewTodo() {
    setTodos([...todos, { id: crypto.randomUUID(), todoLabel: newTodo }]);
    setNewTodo("");
  }
  // delete todo
  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // function toggleCompleted(id) {
  //   setTodos((prevState) =>
  //     prevState.map((todo) =>
  //       todo.id === id
  //         ? { ...todo, id: crypto.randomUUID(), completed: !todo.completed }
  //         : todo
  //     )
  //   );
  // }
  function toggleCompleted(checkedId) {
    const newCheckedTodos = todos.map((todo) =>
      checkedId === todo.id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newCheckedTodos);
  }
  return (
    <div className="todo-list-container ">
      <h1>Todo List</h1>
      <div>
        <div>
          <input
            aria-label="Enter new todo"
            type="text"
            placeholder="Add your task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <div>
            <button disabled={!newTodo} onClick={handleAddNewTodo}>
              Submit
            </button>
          </div>
        </div>
        <ul>
          {todos.map(({ id, todoLabel, completed }) => (
            <li className="todo-item" key={id}>
              <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleCompleted(id)}
              />
              <span className={completed ? "todo-completed" : null}>
                {todoLabel}{" "}
              </span>
              <button onClick={() => handleDeleteTodo(id)}>
                Delelte todo{" "}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
