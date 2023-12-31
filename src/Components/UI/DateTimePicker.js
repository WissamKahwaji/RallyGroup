import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { useSelector } from "react-redux";

const DateTimePicker = ({ label }) => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());

  const handleDateTimeChange = (moment) => {
    setSelectedDateTime(moment.toDate());
  };
  const colorsData = useSelector((state) => state.colorsSlice);
  const textStyle = {
    background: `${colorsData.data.linear}`,
    WebkitTextFillColor: "transparent", // Use WebkitTextFillColor instead of -webkit-text-fill-color
    WebkitBackgroundClip: "text", // Use WebkitBackgroundClip instead of -webkit-background-clip
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
        // className={`bg-transparent rounded-md`}
        // input={false}
        value={selectedDateTime}
        onChange={handleDateTimeChange}
        inputProps={{ placeholder: "Select Date and Time", style: inputStyle }}
      />
    </div>
  );
};

export default DateTimePicker;
