// src/components/DashboardComponent.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Todo from "./todo";

const DashboardComponent = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/todo");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/todo/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <Todo key={todo._id} todo={todo} onDelete={handleDeleteTodo} />
      ))}
    </div>
  );
};

export default DashboardComponent;
