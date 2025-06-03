import { createContext } from "react";
import type { ContextStore } from "./ContextStore";

export const TaskDataContext = createContext<ContextStore | null>(null);
