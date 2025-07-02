import { useState, useEffect } from 'react';
import type { TaakProps } from './Taak';
import Taak from './Taak';

interface Props {
  tasks: TaakProps[];
}

export default function Takenlijst(props: Props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [showCompleted, setShowCompleted] = useState(true);
  const [newTaskText, setNewTaskText] = useState('');

  useEffect(() => {
    if (tasks.length > 0 && tasks.every(t => t.completed)) {
      alert('Party!');
    }
  }, [tasks]);

  function markTaskAsDone(text: string) {
    setTasks(
      tasks.map(task =>
        task.text === text ? { ...task, completed: true } : task
      )
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Nieuwe taak"
          value={newTaskText}
          onChange={e => setNewTaskText(e.target.value)}
        />
        <button
          onClick={() => {
            if (newTaskText.trim() !== '') {
              setTasks([...tasks, { text: newTaskText, completed: false }]);
              setNewTaskText('');
            }
          }}
        >
          Toevoegen
        </button>
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
          <Taak
            key={task.text}
            text={task.text}
            completed={task.completed}
            markAsDone={() => markTaskAsDone(task.text)}
          />
        ))}
    </div>
  );
}
