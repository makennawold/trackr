import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

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
    console.log("delete", id);
  };

  return (
    <div className="container">
      <Header title="trackr" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
