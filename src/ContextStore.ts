export type Task = { id: number; text: string; done: boolean };
export type TaskKey = "one" | "two" | "three";

export class ContextStore {
  private subscribers = new Map<TaskKey, Set<(task: Task) => void>>();
  private data: Record<TaskKey, Task>;
  constructor(data: Record<TaskKey, Task>) {
    this.data = data;
  }

  subscribe(listener: (value: Task) => void, key: TaskKey) {
    const sub = this.subscribers.get(key) ?? new Set();
    sub.add(listener);
    this.subscribers.set(key, sub);

    // execute listener on subscription
    listener(this.data[key]);

    return () => {
      sub.delete(listener);
      if (sub.size === 0) this.subscribers.delete(key);
    };
  }

  update(key: TaskKey, task: Task) {
    this.data[key].text = task.text;
    this.subscribers.get(key)?.forEach((s) => s(task));
  }
}
