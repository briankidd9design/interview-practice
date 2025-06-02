// Tasks are objects: { id: "someId", name: "task name" }
// When adding a task, it’s pushed into the tasks array.
// Deleting a task uses .filter() to return a new array without the task that matches the ID.
// renderTasks() re-renders the entire task list each time a task is added or deleted.

// Store tasks as an array of objects
let tasks = [];

// Utility to generate unique ID
function generateId() {
  return Date.now().toString(); // Simple unique ID
}

// Add Task
document.getElementById("addTaskBtn").addEventListener("click", () => {
  const taskInput = document.getElementById("taskInput");
  // the new task is the user input
  const taskName = taskInput.value.trim();
// ensures that no empty tasks can be pushed to the array from the input box
  if (taskName !== "") {
    //this pushes objects to the array creating an array of objects
    const newTask = {
        // this generates a unqique id using the date
      id: generateId(),

      name: taskName,
    };

    tasks.push(newTask);
    renderTasks();
    taskInput.value = "";
  }
});

// Delete Task using filter
function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId); // Filter out the task
  // we have to call renderTask function after every change
  renderTasks();
}

// Render tasks to the DOM
function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // Clear previous list

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.name;
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", () => deleteTask(task.id));
// this adds a delete button to each li
    li.appendChild(deleteBtn);
    // this adds a new task
    taskList.appendChild(li);
  });
}
