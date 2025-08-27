import TaskItem from "./token";

function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) {
    return <p>No hay tareas.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
