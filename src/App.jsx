import { useState, useEffect } from "react";
import TaskForm from "./components/añadir";
import TaskList from "./components/listar";
import './index.css'

function App() {
  
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name) => {
    const newTask = {
      id: Date.now(),  
      name: name,      
      completed: false, 
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true; 
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Gestión de Tareas</h1>

      {}
      <TaskForm addTask={addTask} />

      {}
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setFilter("all")}>Todas</button>
        <button onClick={() => setFilter("pending")}>Pendientes</button>
        <button onClick={() => setFilter("completed")}>Completadas</button>
      </div>

      {}
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
