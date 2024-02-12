// src/components/AddComponent.js
import React, { useState } from "react";
import axios from "axios";

const AddComponent = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  const handleAddTodo = async () => {
    try {
      const response = await axios.post("http://localhost:5000/todo", newTodo);
      onAdd(response.data);
      setNewTodo({ title: "", description: "" });
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newTodo.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newTodo.description}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default AddComponent;
