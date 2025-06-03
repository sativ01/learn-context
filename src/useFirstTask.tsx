import { useCallback, useContext, useEffect, useRef, useState } from "react";
import type { Task, TaskKey } from "./ContextStore";
import { TaskDataContext } from "./TaskDataContext";

export const useTask = (key: TaskKey) => {
  const [task, setTask] = useState<Task>();
  const store = useContext(TaskDataContext);
  useEffect(() => store?.subscribe(setTask, key), [key, store]);

  return task;
};

export const useUpdateTask = () => {
  const store = useContext(TaskDataContext);
  return useCallback(
    (key: TaskKey, task: Task) => store?.update(key, task),
    [store],
  );
};

// Ref usage example
export const useTaskRef = (key: TaskKey) => {
  const taskRef = useRef<Task>(null);
  const store = useContext(TaskDataContext);
  useEffect(
    () => store?.subscribe((task) => (taskRef.current = task), key),
    [key, store],
  );

  return taskRef;
};
