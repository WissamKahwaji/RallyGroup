import React from "react";
import { useSelector } from "react-redux";

const Input = ({ input }) => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const textStyle = {
    background: `${colorsData.data.linear}`,
    WebkitTextFillColor: "transparent", // Use WebkitTextFillColor instead of -webkit-text-fill-color
    WebkitBackgroundClip: "text", // Use WebkitBackgroundClip instead of -webkit-background-clip
  };

  const inputStyle = {
    border: `1px solid ${colorsData.data.mainColor}`,
  };
  return (
    <div className={`flex flex-col`}>
      <label htmlFor={input.id} style={textStyle} className={`mb-1`}>
        {input.title}
      </label>
      <input
        {...input}
        style={inputStyle}
        className={`bg-transparent rounded-md p-1 outline-none`}
      />
    </div>
  );
};

export default Input;
