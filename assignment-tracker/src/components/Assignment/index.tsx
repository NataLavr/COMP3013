import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa"; 

type Date = {
  value: string;
  toLocaleDateString: string;
}

type AssignmentProps = {
  assignment: { 
    title: string; 
    completed: boolean; 
    dueDate?: Date;
  };
  onDelete: () => void;
  onComplete: () => void;
}

export function Assignment({ assignment, onDelete, onComplete }: AssignmentProps) {
  return (
    <div className={styles.assignment}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete()} 
      >
        {assignment.completed ? (
          <FaCheckCircle size={20} color="#4ea8de" /> 
        ) : (
          <div className={styles.circle}></div> 
        )}
      </button>
      <p className={assignment.completed ? styles.textCompleted : ''}>
        {assignment.title}
        {assignment.dueDate && (<span className={styles.due}> - Due: {assignment.dueDate.toLocaleDateString()}</span>)}
      </p>
      <button className={styles.deleteButton} onClick={onDelete}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
