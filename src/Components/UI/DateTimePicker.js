// DateTimePicker.jsx

import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { useSelector } from "react-redux";

const DateTimePicker = ({ label, name, onDateTimeChange }) => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());

  const handleDateTimeChange = (moment) => {
    const selectedDate = moment.toDate();
    setSelectedDateTime(selectedDate);

    // Send the selected date to the parent component
    onDateTimeChange(name, selectedDate);
  };

  const colorsData = useSelector((state) => state.colorsSlice);
  const textStyle = {
    background: `${colorsData.data.linear}`,
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
  };

  const inputStyle = {
    border: `1px solid #FFFFFF`,
    background: "transparent",
    color: "white",
    padding: "0.25rem",
    borderRadius: "0.375rem",
    outline: "none",
    width: "100%",
  };

  return (
    <div className={`text-black`}>
      <label className={`mb-1 capitalize text-white`}>{label}</label>
      <Datetime
        value={selectedDateTime}
        onChange={handleDateTimeChange}
        inputProps={{ placeholder: "Select Date and Time", style: inputStyle }}
      />
    </div>
  );
};

export default DateTimePicker;
