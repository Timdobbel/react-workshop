export interface TaakProps {
  text: string;
  completed: boolean;
  markAsDone?: () => void;
}

export default function Taak(props: TaakProps) {
  const text = props.text;
  const completed = props.completed;
  const markAsDone = props.markAsDone;

  return (
    <div>
      <div
        key={text}
        style={{
          display: 'flex',
          gap: '60px',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ flex: 1, textAlign: 'left' }}>{text}</div>
        <div>{completed ? 'Afgerond' : 'open'}</div>
        {!completed && markAsDone && (
          <button onClick={markAsDone}>Markeer als afgerond</button>
        )}
      </div>
    </div>
  );
}
