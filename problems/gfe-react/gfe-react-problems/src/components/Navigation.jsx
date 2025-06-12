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
    </div>
  );
}
