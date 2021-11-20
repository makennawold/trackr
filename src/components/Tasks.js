import { transformFromAstSync } from "@babel/core";

const tasks = [
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
    id: 1,
    text: "write sunday school lesson",
    day: "today",
    reminder: true,
  },
];

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
