import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from 'react';

type Date = {
  value: string;
  toLocaleDateString: string;
}

type Assignment = {
  title: string;
  completed: boolean;
  dueDate?: Date;
}

function App() {
  const [inputAssignments, setInputAssignments] = useState<Assignment[]>([]);
  const [newAssignment, setNewAssignment] = useState("");

  const addNewAssignment = (title: string, dueDate: Date) => {
    if (title.trim() !== "") {
      const updatedAssignments = inputAssignments.concat([{ title: title, dueDate: dueDate, completed: false }]);
      setInputAssignments(updatedAssignments);
      setNewAssignment("");
    }
  };

  const deleteAssignment = (index: number) => {
    const updatedAssignments = inputAssignments.slice();
    updatedAssignments.splice(index, 1);
    setInputAssignments(updatedAssignments);
  };

  const completeAssignment = (index: number) => {
    const updatedAssignments = inputAssignments.slice();
    updatedAssignments[index].completed = true;
    setInputAssignments(updatedAssignments);
  };

  return (
    <>
      <Header
        value={newAssignment}
        onChange={(e) => setNewAssignment(e.target.value)}
        onAdd={(title, selectedDueDate) => addNewAssignment(title, selectedDueDate)}
      />
      <Assignments
        inputAssignments={inputAssignments}
        deleteAssignment={deleteAssignment}
        completeAssignment={completeAssignment}
      />
    </>
  );
}

export default App;
