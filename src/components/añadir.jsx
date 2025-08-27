import { useState } from "react";

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (taskName.trim() === "") return; 
    addTask(taskName);
    setTaskName(""); 
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "10px" }}>
      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TaskForm;
