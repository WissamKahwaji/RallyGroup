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
    border: `1px solid #FFFFFF`,
  };
  return (
    <div className={`my-3 flex flex-col`}>
      <label htmlFor={input.id} className={`#FFFFFF mb-1 capitalize`}>
        {input.title}
      </label>
      <input
        {...input}
        required
        style={inputStyle}
        className={`rounded-md bg-transparent p-1 outline-none`}
      />
    </div>
  );
};

export default Input;
