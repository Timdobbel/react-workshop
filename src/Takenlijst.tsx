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
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Nieuwe taak"
          onKeyDown={e => {
            if (e.key === 'Enter') {
              console.log('Submitting task...');
            }
          }}
        />
        <label
          style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}
        >
          Toon afgeronde taken
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />
        </label>
      </div>
      <hr />

      {tasks
        .filter(task => showCompleted || !task.completed)
        .map(task => (
          <Taak key={task.text} text={task.text} completed={task.completed} />
        ))}
    </div>
  );
}
