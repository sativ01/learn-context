import { TaskItem } from "./TaskItem";
import { useThirdTask } from "./useFirstTask";

export const TaskThree = () => {
  const task = useThirdTask();
  return (
    task && (
      <li key={task?.id}>
        <TaskItem task={task} taskKey={"three"} />
      </li>
    )
  );
};
