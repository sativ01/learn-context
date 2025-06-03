import { useContext, useMemo } from "react";
import { TasksContext } from "./Counters";

export const useFirstTask = () => {
  const one = useContext(TasksContext)?.one;
  return useMemo(() => one, [one]);
};
