export interface TaakProps {
  text: string;
  completed: boolean;
}

export default function Taak(props: TaakProps) {
  const text = props.text;
  const completed = props.completed;

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
      </div>
    </div>
  );
}
