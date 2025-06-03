import "./App.css";
import { TaskFour } from "./TaskFour";
import { TaskOne } from "./TaskOne";
import { TasksMain } from "./Tasks";
import { TaskThree } from "./TaskThree";
import { TaskTwo } from "./TaskTwo";

function App() {
  return (
    <TasksMain>
      <TaskOne />
      <TaskTwo />
      <TaskThree />
      <TaskFour />
    </TasksMain>
  );
}

export default App;
