export default function Item({ task, onDeleteTask, onToggleTask }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />
      <span style={task.completed ? { textDecoration: "line-through" } : {}}>
        {task.description} {task.priority && `(${task.priority})`}
      </span>
      <button onClick={() => onDeleteTask(task.id)}>❌</button>
    </li>
  );
}
