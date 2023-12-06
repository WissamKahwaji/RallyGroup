import React from "react";
import { useSelector } from "react-redux";

const TextArea = ({ label, input }) => {
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
        {label}
      </label>
      <textarea
        {...input}
        style={inputStyle}
        className={`h-40 resize-none rounded-md bg-transparent p-1 outline-none`}
      />
    </div>
  );
};

export default TextArea;
