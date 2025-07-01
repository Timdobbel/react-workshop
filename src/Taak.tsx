export interface Props {
  naam: string;
  completed?: boolean;
  onClick: (taak: Task) => void;
}

export default function Taak({ naam, onClick }: Props) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div>{naam}</div>
      <button onClick={(taak) => onClick({ naam: naam, completed: true })}>
        Afronden
      </button>
    </div>
  );
}
