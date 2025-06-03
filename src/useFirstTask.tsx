import { useCallback, useContext, useEffect, useState } from "react";
import type { Task, TaskKey } from "./ContextStore";
import { TaskDataContext } from "./TaskDataContext";

export const useTask = (key: TaskKey) => {
  const [task, setTask] = useState<Task>();
  const store = useContext(TaskDataContext);
  useEffect(() => {
    const unsubscribe = store?.subscribe(setTask, key);
    return unsubscribe;
  }, [key, store]);
  return task;
};

export const useUpdateTask = () => {
  const store = useContext(TaskDataContext);
  return useCallback(
    (key: TaskKey, task: Task) => store?.update(key, task),
    [store],
  );
};
