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
    </div>
  );
}
