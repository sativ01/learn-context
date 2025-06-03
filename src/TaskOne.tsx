import { useTask } from "./useFirstTask";
import { TaskItem } from "./TaskItem";

export const TaskOne = () => {
  const task = useTask("one");
  return (
    task && (
      <li key={task?.id}>
        <TaskItem task={task} taskKey={"one"} />
      </li>
    )
  );
};
