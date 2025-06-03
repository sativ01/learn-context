import { TaskItem } from "./TaskItem";
import { useTask } from "./useFirstTask";

export const TaskThree = () => {
  const task = useTask("three");
  return (
    task && (
      <li key={task?.id}>
        <TaskItem task={task} taskKey={"three"} />
      </li>
    )
  );
};
