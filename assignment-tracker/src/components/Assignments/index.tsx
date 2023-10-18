import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type AssignmentsProps = {
    inputAssignments: { 
    title: string; 
    completed: boolean 
  }[];

  deleteAssignment: (index: number) => void;
  completeAssignment: (index: number) => void;
}

export function Assignments({ inputAssignments, deleteAssignment, completeAssignment }: AssignmentsProps) {
  const completedCount = inputAssignments.filter((a) => a.completed).length;

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{inputAssignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedCount} of {inputAssignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {inputAssignments.map((assignment, index) => (
          <Assignment
            key={index}
            assignment={assignment}
            onDelete={() => deleteAssignment(index)}
            onComplete={() => completeAssignment(index)}
          />
        ))}
      </div>
    </section>
  );
}
