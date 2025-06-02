// Summary of Fixes:
// Moved userInput inside userAddTodo() so it gets the latest input on each click.
// Updated deleteTodo() to reassign allTodos and call renderTodos() afterward.
// Attached deleteTodo to window so inline onclick in HTML can access it.
// Cleared the input field after adding a new todo.
// Ensured the UI updates immediately by calling renderTodos() after any change.

let todosList = document.getElementById("todosList");
let newTodoButton = document.getElementById("buttonAddNewTodo");
// let deleteTodoButton = document.getElementById("deleteTodo");
const INITIAL_TASKS = [
  { id: crypto.randomUUID(), label: "Walk the Dog" },
  { id: crypto.randomUUID(), label: "Water the plants" },
  { id: crypto.randomUUID(), label: "Wash the dishes" },
];

let allTodos = [];

allTodos.push(...INITIAL_TASKS);
// render todos
function renderTodos() {
  todosList.innerHTML = allTodos
    .map((todo) => {
      return `<li id=${todo.id}>
              <label>${todo.label} </label>
              <button onClick = "deleteTodo('${todo.id}')">Delete</button>
          </li>`;
    })
    .join("");
}

function userAddTodo() {
  // putting userInput in the function will make sure it gets the most recent value of userInput
  let userInput = document.getElementById("todosInput").value.trim();
  allTodos.push({
    id: crypto.randomUUID(),
    label: userInput,
  });
  // clear the userInput input
  document.getElementById("todosInput").value = "";
  renderTodos();
}

function deleteTodo(id) {
  //   allTodos = allTodos.filter((task) => {
  //    return task.id !== id;
  //   });
  // implicit return
  allTodos = allTodos.filter((task) => task.id !== id);
  renderTodos();
}

window.deleteTodo = deleteTodo;
newTodoButton.addEventListener("click", userAddTodo);
// initial Render
renderTodos();
// todosList.innerHTML = renderTodos;
