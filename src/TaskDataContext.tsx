import { createContext, type ActionDispatch } from "react";
import type { Task, TaskKey } from "./ContextStore";

export type UpdateAction = { task: Task; id: TaskKey };
type TasksContextData = Record<TaskKey, Task>;
export const initialTasks: TasksContextData = {
  one: { id: 0, text: "Philosopher’s Path", done: true },
  two: { id: 1, text: "Visit the temple", done: false },
  three: { id: 2, text: "Drink matcha", done: false },
} as const;

export const TasksContext = createContext<TasksContextData>(initialTasks);
export const TasksDispatchContext = createContext<ActionDispatch<
  [UpdateAction]
> | null>(null);

export function tasksReducer(
  tasks: TasksContextData,
  { task, id }: UpdateAction,
) {
  return { ...tasks, [id]: task };
}
