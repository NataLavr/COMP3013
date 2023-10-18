import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

type HeaderProps = {
  value: string;
  onChange: (e: any) => void;
  onAdd: () => void;
}

export function Header({ value, onChange, onAdd }: HeaderProps) {
  const isCreateButtonDisabled = value.trim() === '';

  const handleCreateAssignment = (event: React.FormEvent) => {
    event.preventDefault();

    if (!isCreateButtonDisabled) {
      onAdd();
    }
  };

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleCreateAssignment}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e);
          }}
        />
        <button
          type="submit"
          onClick={handleCreateAssignment}
          disabled={isCreateButtonDisabled}
          style={{ cursor: isCreateButtonDisabled ? "default" : "pointer" }}
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
