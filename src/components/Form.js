import { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description.trim()) {
      alert("Please enter a task description!");
      return;
    }

    const newTask = { 
      description, 
      priority, 
      completed: false, 
      id: Date.now() 
    };

    onAddTask(newTask);
    setDescription("");
    setPriority("Low");
  }

  const priorities = ["Low", "Medium", "High"];

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Add a task to your list 📝</h3>
      
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        {priorities.map((level) => (
          <option value={level} key={level}>
            {level}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Enter a new task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        autoFocus
      />
      <button>Add</button>
    </form>
  );
}
