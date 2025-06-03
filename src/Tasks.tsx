import { useRef, type FC, type PropsWithChildren } from "react";
import { ContextStore, type Task, type TaskKey } from "./ContextStore";
import { TaskDataContext } from "./TaskDataContext";

const initialTasks: Record<TaskKey, Task> = {
  one: { id: 0, text: "Philosopher’s Path", done: true },
  two: { id: 1, text: "Visit the temple", done: false },
  three: { id: 2, text: "Drink matcha", done: false },
} as const;

export const TasksMain: FC<PropsWithChildren> = ({ children }) => {
  const store = useRef(new ContextStore(initialTasks));

  return (
    <TaskDataContext.Provider value={store.current}>
      <h1>Day off in Kyoto</h1>
      <ul>{children}</ul>
    </TaskDataContext.Provider>
  );
};
