import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "watch tangled",
      day: "today",
      reminder: true,
    },
    {
      id: 2,
      text: "have dinner",
      day: "today",
      reminder: false,
    },
    {
      id: 3,
      text: "listen to RED",
      day: "today",
      reminder: false,
    },
    {
      id: 4,
      text: "write sunday school lesson",
      day: "today",
      reminder: true,
    },
  ]);

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="trackr" />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to complete"
      )}
    </div>
  );
}

export default App;
