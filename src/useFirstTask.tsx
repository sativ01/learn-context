import { useCallback, useContext, useMemo } from "react";
import type { Task, TaskKey } from "./ContextStore";
import { TasksContext, TasksDispatchContext } from "./TaskDataContext";

export const useFirstTask = () => {
  const tasks = useContext(TasksContext);
  return useMemo(() => tasks?.one, [tasks?.one]);
};

export const useSecondTask = () => {
  const tasks = useContext(TasksContext);
  return useMemo(() => tasks?.two, [tasks?.two]);
};

export const useThirdTask = () => {
  const tasks = useContext(TasksContext);
  return useMemo(() => tasks?.three, [tasks?.three]);
};

export const useUpdateTask = () => {
  const update = useContext(TasksDispatchContext);
  return useCallback(
    (id: TaskKey, task: Task) => update?.({ id, task }),
    [update],
  );
};
