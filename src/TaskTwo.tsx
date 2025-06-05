import { TaskItem } from "./TaskItem";
import { useSecondTask } from "./useFirstTask";

export const TaskTwo = () => {
  const task = useSecondTask();
  return (
    task && (
      <li key={task?.id}>
        <TaskItem task={task} taskKey={"two"} />
      </li>
    )
  );
};
