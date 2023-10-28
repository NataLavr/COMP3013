import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import MyDatePickerComponent from "../Calendar";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

type Date = {
  value: string;
  toLocaleDateString: string;
}

type HeaderProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (title: string, dueDate: Date | undefined) => void;
}

export function Header({ value, onChange, onAdd }: HeaderProps) {
  const isCreateButtonDisabled = value.trim() === '';
  const [dueDate, setDueDate] = useState<Date | undefined>(undefined);
  const [dateOpen, setDateOpen] = useState(false);

  const handleDateSelection = (selectedDate: Date) => {
    setDueDate(selectedDate);  
    setDateOpen(false);
  };

  const handleCreateAssignment = (event: React.FormEvent) => {
    event.preventDefault();
    onAdd(value, dueDate);
    setDueDate(undefined);
  };

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleCreateAssignment}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={value} 
          onChange={onChange}
        />
        <button 
          type="button"
          className={styles.calendarContainer} 
          onClick={() => setDateOpen(!dateOpen)}
        >
          { dueDate ? dueDate.toLocaleDateString() : <FontAwesomeIcon icon={faCalendar} /> }
          {dateOpen && (
            <div className={styles.calendar}>
              <MyDatePickerComponent onSelectDate={handleDateSelection} />
            </div>
          )}
        </button>
        <button
          type="submit"
          disabled={isCreateButtonDisabled}
          style={{ cursor: isCreateButtonDisabled ? "default" : "pointer" }}
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
