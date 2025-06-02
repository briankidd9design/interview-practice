const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

let todos = [];

// load todos from local storage
// the will happen on render
function loadTodos() {
  const stored = localStorage.getItem("todos");
  // if there is a todo in local storage, then load all those items to the DOM by calling renderTodos
  if (stored) {
    todos = JSON.parse(stored);
    renderTodos();
  }
}
// Save todos to local storage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Add a new todo
function addTodo(name) {
  const newTodo = {
    id: Date.now(),
    name: name.trim(),
  };
  todos.push(newTodo);
  // save todos to local storage
  saveTodos();
  renderTodos();
}

// Delete a todo using filter
function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
  renderTodos();
}

// Render the todo list
function renderTodos() {
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.name;

    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = () => deleteTodo(todo.id);

    li.appendChild(btn);
    list.appendChild(li);
  });
}

// Handle form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() !== "") {
    addTodo(input.value);
    input.value = "";
  }
});

// initialize
loadTodos();
