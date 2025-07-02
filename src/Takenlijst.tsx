import { useState } from 'react';
import type { TaakProps } from './Taak';
import Taak from './Taak';

interface Props {
  tasks: TaakProps[];
}

export default function Takenlijst(props: Props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [showCompleted, setShowCompleted] = useState(true);

  return (
    <div>
      <label
        style={{ display: 'flex', gap: '60px', justifyContent: 'flex-end' }}
      >
        Toon afgeronde taken
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={() => setShowCompleted(!showCompleted)}
        />
      </label>
      <hr />

      {tasks
        .filter(task => showCompleted || !task.completed)
        .map(task => (
          <Taak key={task.text} text={task.text} completed={task.completed} />
        ))}
    </div>
  );
}
