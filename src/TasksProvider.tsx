import { useReducer, type FC, type PropsWithChildren } from "react";
import {
  initialTasks,
  TasksContext,
  TasksDispatchContext,
  tasksReducer,
} from "./TaskDataContext";

export const TasksProvider: FC<PropsWithChildren> = ({ children }) => {
  const [tasks, update] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext value={tasks}>
      <TasksDispatchContext value={update}>{children}</TasksDispatchContext>
    </TasksContext>
  );
};
