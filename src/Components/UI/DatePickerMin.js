import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerMin = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <label className={`text-xl`}>Select a Date:</label>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()} // Set the minimum date to today
      />
    </div>
  );
};

export default DatePickerMin;
