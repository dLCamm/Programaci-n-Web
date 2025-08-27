import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) {
    return <p className="text-gray-600 mt-4">No hay tareas.</p>;
  }

  return (
    <ul className="w-full max-w-md bg-white shadow rounded p-3">
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
