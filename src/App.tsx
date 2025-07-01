import { useState } from "react";
import "./App.css";
import Taak from "./Taak";
import Takenlijst from "./Takenlijst";

function App() {
  const initialTasks = [
    { completed: true, text: "Write project proposal" },
    { completed: false, text: "Fix login page bug" },
    { completed: false, text: "Refactor header component" },
    { completed: true, text: "Update README.md" },
    { completed: false, text: "Review pull request #42" },
    { completed: true, text: "Push latest changes to GitHub" },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  function taakAfronden(taak) {
    setTasks([...tasks, { ...taak }]);
  }

  return (
    <>
      <Takenlijst>
        {tasks.map(
          (task) =>
            task.completed && (
              <Taak naam={task.text} onClick={taakAfronden(task)} />
            )
        )}
      </Takenlijst>
    </>
  );
}

export default App;
