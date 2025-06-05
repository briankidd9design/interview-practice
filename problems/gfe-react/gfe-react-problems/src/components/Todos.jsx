import { useState } from "react";
import Navigation from "./Navigation";

// let id= 0;
// 2
const INITIAL_TASKS = [
  { id: crypto.randomUUID(), label: "Walk the Dog" },
  { id: crypto.randomUUID(), label: "Water the plants" },
  { id: crypto.randomUUID(), label: "Wash the dishes" },
];
// 1. create state for the existing tasks and the tasks that will be added
// 2. For each task you need to create an id. We can do that by making the id the index of the state array, which is generally bad practice but okay in this context. However, if it's bad practice then it's bad practice. LOL. So I am modifying it to use crypto.randomUUID
// 3. Then set up an controlled input so that React will keep track of th inputs state
// 4. The new task is set to whatever the user inputs into the input box
// 5. THEN once the button is clicked the existing tasks are concatenated or combined with the new tasks (we can also use the spread operator and maybe the array push method)
// 6. then we map tasks to the the UI using tasks.map
// 7. if you click delete then just show the tasks where the id does not equal the id of the task being clicked on
// 8. You can also set up separate callbacks so that adding tasks and deleting tasks functionality is easier to add to different parts of an entire app

export default function App() {
  // 1
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  //   const [newTask, setNewTask] = useState("");
  const [newTask, setNewTask] = useState("");
  console.log(tasks);
  // handle add a todo function options
  // 5
  function handleAddTodo() {
    // setTasks([...tasks, { id: crypto.randomUUID(), label: newTask.trim() }]);
    // const c = a(concat b) c -> (a, b);
    setTasks(
      tasks.concat({
        // id: id++,
        id: crypto.randomUUID(),
        label: newTask.trim(),
      })
    );
    // https://chatgpt.com/share/683cdb7e-4610-800d-91de-aee95a156eac
    // Do you ever want to push to the exisiting state but not use setState? Is this bad practice.
    // Yes, mutating state directly (like using tasks.push(...)) without calling setState is considered bad practice in React. Here's why:
    // According to ChatGPT
    // 🔍 Why it's bad practice:
    // React won't know the state has changed:
    // React uses setState (or the setter function from useState) to know when to re-render.
    // If you just mutate the array (e.g., push) without calling the setter, React won't re-render, and your UI won't update.
    // It violates immutability principles:
    // setTasks(prevTasks => [
    //   ...prevTasks,
    //   {
    //     id: crypto.randomUUID(),
    //     label: newTask.trim(),
    //   },
    // ]);
    // State should be treated as immutable. Instead of modifying it in place, create a new copy of the state with your changes.
    // tasks.push({
    //   // id: id++,
    //   id: crypto.randomUUID(),
    //   label: newTask.trim(),
    // });
    setNewTask("");
  }
  // handle delete function options
  function handleDelete(id) {
    // setTasks(tasks.filter((task) => task.id !== id));
    // setTasks(tasks.filter((task) => task.id !== id));
    const index = tasks.findIndex((item) => item.id === id);
    tasks.splice(index, 1);
    setTasks([...tasks]);
  }

  return (
    <>
      {" "}
      <nav>
        <Navigation />
      </nav>
      <div>
        <h1>Todo List</h1>
        <div>
          {/* 3 */}
          <input
            aria-label="add new task"
            type="text"
            value={newTask}
            placeholder="Add your task"
            // this creates the controlled component where the input is being tracked by React state
            onChange={(event) => setNewTask(event.target.value)}
          />
          <div>
            <button
              //   onClick={() => {
              disabled={!newTask}
              onClick={handleAddTodo}
              // the tasks state array of task objects is being combined or concatenated with the newTask state array of tasks objects;
              // setTasks(

              //   tasks.concat({
              //     // id: id++,
              //     id: crypto.randomUUID(),
              //     label: newTask.trim(),
              //   })
              //   [...tasks, { id: crypto.randomUUID(), label: newTask.trim() }]
              // );
              // this clears the input
              // setNewTask("");
              //   }}
            >
              Submit
            </button>
          </div>
        </div>
        <ul>
          {/* 6 */}
          {/* We are destructuring off label and id */}
          {/* 1. we and destructure the values below to then equal id = id and then
          since the parameter name has the same name as the value, using
          ECMAScript 2015 rules we can just change the parameter to one name */}
          {/* {tasks.map(({id = tasks.id, label = tasks.label} ) => ( */}
          {/* {tasks.map(({ id = id, label = label }) => ( */}
          {/* tasks is an array of objects */}
          {tasks.map(({ id, label }) => (
            <li key={id}>
              <span>{label}</span>
              <button
                // onClick={() => {
                // only show the tasks where the tasks.id does NOT equal the id of the mapped data the task.id and the id being passed to map are the same. So this allows us to compare the ids of the tasks and only show the tasks where the id of what is being clicked on does not equal the id of the tasks in the array of tasks
                //   setTasks(tasks.filter((task) => task.id !== id));
                // }}
                // as long as this is an arrow function for the onClick, it will not call itself on render
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </li>
          ))}
          {/* <li>
            <span>Walk the dog</span>
            <button>Delete</button>
          </li>
          <li>
            <span>Water the plants</span>
            <button>Delete</button>
          </li>
          <li>
            <span>Wash the dishes</span>
            <button>Delete</button>
          </li> */}
        </ul>
      </div>
    </>
  );
}
