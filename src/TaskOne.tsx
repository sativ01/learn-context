import { useFirstTask } from "./useFirstTask";
import { TaskItem } from "./TaskItem";

export const TaskOne = () => {
  const task = useFirstTask();
  return (
    task && (
      <li key={task.id}>
        <TaskItem task={task} taskKey={"one"} />
      </li>
    )
  );
};
