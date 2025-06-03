import { useCallback, useRef, type ChangeEvent } from "react";
import type { Task, TaskKey } from "./ContextStore";
import { useUpdateTask } from "./useFirstTask";

export function TaskItemComp({
  task,
  taskKey,
}: {
  task: Task;
  taskKey: TaskKey;
}) {
  const cntr = useRef(0);
  const dispatch = useUpdateTask();

  console.log(">>>>>", taskKey, "  ", cntr.current++);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch?.(taskKey, {
        ...task,
        text: e.target?.value,
      });
    },
    [dispatch, task, taskKey],
  );

  return (
    <label>
      <input value={task?.text} onChange={handleChange} />
    </label>
  );
}

export const TaskItem = TaskItemComp;
