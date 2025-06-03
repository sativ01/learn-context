import type { Task } from "./ContextStore";
import { TaskItem } from "./TaskItem";

export const TaskFour = () => {
  const task: Task = {
    id: 7,
    text: "Fourth task",
    done: false,
  };
  return (
    <li key={task.id}>
      <TaskItem task={task} taskKey="one" />
    </li>
  );
};
