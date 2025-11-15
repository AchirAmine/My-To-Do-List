export default function Stats({ tasks }) {
  if (!tasks.length)
    return (
      <p className="stats">
        <em>Start adding some tasks to your list 🚀</em>
      </p>
    );

  const numTasks = tasks.length;
  const numCompleted = tasks.filter((task) => task.completed).length;
  const percentage = Math.round((numCompleted / numTasks) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You completed all your tasks! Well done ✅`
          : `📝 You have ${numTasks} tasks on your list, and you already completed ${numCompleted} (${percentage}%)`}
      </em>
    </footer>
  );
}
