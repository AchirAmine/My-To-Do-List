import { useState } from "react";
import Item from "./Item";

export default function TodoList({
  tasks,
  onDeleteTask,
  onToggleTask,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedTasks;

  if (sortBy === "input") sortedTasks = tasks;

  if (sortBy === "description")
    sortedTasks = tasks
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "completed")
    sortedTasks = tasks
      .slice()
      .sort((a, b) => Number(a.completed) - Number(b.completed));

  if (sortBy === "priority") {
    const priorityValue = { Low: 3, Medium: 2, High: 1 };
    sortedTasks = tasks
      .slice()
      .sort((a, b) => priorityValue[a.priority] - priorityValue[b.priority]);
  }

  return (
    <div className="list">
      <ul>
        {sortedTasks.map((task) => (
          <Item
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
            key={task.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="completed">Sort by completion</option>
          <option value="priority">Sort by priority</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
