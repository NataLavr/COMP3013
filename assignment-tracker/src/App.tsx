import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from 'react';

type Assignment = {
  title: string;
  completed: boolean;
}

function App() {
  const [inputAssignments, setInputAssignments] = useState<Assignment[]>([]);
  const [newAssignment, setNewAssignment] = useState("");

  const addNewAssignment = () => {
    if (newAssignment.trim() !== "") {
      const updatedAssignments = inputAssignments.concat([{ title: newAssignment, completed: false }]);
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
        onAdd={addNewAssignment}
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
