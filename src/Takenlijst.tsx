import type { TaakProps } from './Taak';
import Taak from './Taak';

interface Props {
  tasks: TaakProps[];
}

export default function Takenlijst(props: Props) {
  return props.tasks.map(task => (
    <Taak key={task.text} text={task.text} completed={task.completed} />
  ));
}
