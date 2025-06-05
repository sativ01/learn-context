import { type FC, type PropsWithChildren } from "react";
import { TasksProvider } from "./TasksProvider";
export const TasksMain: FC<PropsWithChildren> = ({ children }) => {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <ul>{children}</ul>
    </TasksProvider>
  );
};
