import { TaskItem } from "./TaskItem";
import { useTask } from "./useFirstTask";

export const TaskTwo = () => {
  const task = useTask("two");
  return (
    task && (
      <li key={task?.id}>
        <TaskItem task={task} taskKey={"two"} />
      </li>
    )
  );
};
