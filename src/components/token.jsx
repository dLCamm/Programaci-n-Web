function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li>
      <span
        onClick={() => toggleTask(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {task.name}
      </span>
      <button onClick={() => deleteTask(task.id)} style={{ marginLeft: "10px" }}>
        Eliminar
      </button>
    </li>
  );
}

export default TaskItem;
