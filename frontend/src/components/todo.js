// src/components/Todo.js
import React from "react";

const Todo = ({ todo, onDelete }) => {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <button onClick={() => onDelete(todo._id)}>Delete</button>
    </div>
  );
};

export default Todo;
