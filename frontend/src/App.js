// src/App.js
import React from "react";
import "./App.css";
import AddComponent from "./components/addcomponent";
import DashboardComponent from "./components/dashboard";

function App() {
  const handleAddTodo = (todo) => {
    // Logic to update the todos list
    // This function will be passed to the AddComponent
    // It will be called when a new todo is added
  };

  return (
    <div className="App">
      <AddComponent onAdd={handleAddTodo} />
      <DashboardComponent />
    </div>
  );
}

export default App;
