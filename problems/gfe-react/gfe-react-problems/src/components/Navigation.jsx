import React from "react";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div className="navigation">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/todo-list">
        Todo List
      </Link>
      <Link className="nav-link" to="/submit-form-basic">
        Submit Form Basic
      </Link>
      <Link className="nav-link" to="/holy-grail-layout">
        Holy Grail Layout
      </Link>
      <Link className="nav-link" to="/tabs">
        tabs
      </Link>
      <Link className="nav-link" to="/job-board">
        job board
      </Link>
      <Link className="nav-link" to="/job-board-advanced">
        job board advanced
      </Link>
      <Link className="nav-link" to="/todo-basic">
        todo basic
      </Link>
      <Link className="nav-link" to="/todo-simple">
        todo simple
      </Link>
      <Link className="nav-link" to="/todos-local-storage">
        todos local storage
      </Link>
      <Link className="nav-link" to="/physical-fitness-list">
        physical exercise list
      </Link>
      <Link className="nav-link" to="/accordion-one">
        accordion-one
      </Link>
    </div>
  );
}
