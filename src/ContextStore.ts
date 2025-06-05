export type Task = { id: number; text: string; done: boolean };
export type TaskKey = "one" | "two" | "three";
export type Action = {
  type: string;
  id: TaskKey;
  text: string;
};
