import { useState } from 'react';
import { format, isToday } from 'date-fns';
import { AiOutlinePlusCircle } from "react-icons/ai";

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

type Date = {
  value: string;
  toLocaleDateString: string;
}

export default function MyDatePickerComponent({ onSelectDate }: any) {
  const [selected, setSelected] = useState<Date>();
  const [calendarOpen, setCalendarOpen] = useState(false);

  const today = new Date();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = (
      <p>
        You picked {format(selected, 'PP')}.
        <button onClick={() => handleClearSelection()}>Clear</button>
      </p>
    );
  }

  const handleClearSelection = () => {
    setSelected(undefined);
    onSelectDate(undefined);
    setCalendarOpen(false);
  };

  return (
    <div>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={(date) => {
          setSelected(date);
          onSelectDate(date);
          setCalendarOpen(false);
        }}
        fromDate={today}
        footer={footer}
      />
      {calendarOpen && (
        <button 
          onClick={() => setCalendarOpen(false)}>Close Calendar <AiOutlinePlusCircle size={40} />
        </button>
      )}
    </div>
  );
}