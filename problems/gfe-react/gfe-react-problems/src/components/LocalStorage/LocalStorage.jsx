import React from "react";
import { useState, useEffect } from "react";
import "./localStorage.css";

export function LocalStorage() {
  //   const [exercises, setExercises] = useState([]);
  const [exercises, setExercises] = useState(() => {
    try {
      const stored = localStorage.getItem("exercises");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Failed to load exercises", error);
      return [];
    }
  });
  const [newExercise, setNewExercise] = useState("");

  useEffect(() => {
    localStorage.setItem("exercises", JSON.stringify(exercises));
  }, [exercises]);

  function addExercise() {
    setExercises([
      ...exercises,
      { id: crypto.randomUUID(), exerciseLabel: newExercise, completed: false },
    ]);
    setNewExercise("");
  }

  function deleteExercise(id) {
    setExercises(exercises.filter((exercise) => exercise.id !== id));
  }

  // typical toggle
  // function toggleCompleted(clickedId) {
  //   const newExercises = exercises.map((exercise) => {
  //     if (clickedId === exercise.id) {
  //       return { ...exercise, completed: !exercise.completed };
  //     }
  //     return exercise;
  //   });
  //   setExercises(newExercises);
  // }
  // toggle operation used quite frequently
  function toggleCompleted(clickedId) {
    const newExercises = exercises.map((exercise) => {
      return clickedId === exercise.id
        ? { ...exercise, completed: !exercise.completed }
        : exercise;
    });
    setExercises(newExercises);
  }
  return (
    <>
      <div className="local-storage">
        <input
          aria-label="Enter a new todo to add to your todo list"
          type="text"
          placeholder="Add a new exercise"
          value={newExercise}
          onChange={(e) => setNewExercise(e.target.value)}
        />
        <button onClick={addExercise}>Add workout item</button>
        <ul>
          {exercises.map((exercise) => (
            <li className="todo-item" key={exercise.id}>
              <input
                type="checkbox"
                checked={exercise.completed}
                onChange={() => toggleCompleted(exercise.id)}
              />
              <span className={exercise.completed ? "todo-completed" : null}>
                {exercise.exerciseLabel}{" "}
              </span>
              <button onClick={() => deleteExercise(exercise.id)}>
                Delete todo
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
