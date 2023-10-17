import React from "react";
import secondFont from "../../SharedCSS/secondFont.module.css";
import thirdFont from "../../SharedCSS/thirdFont.module.css";
import { useSelector } from "react-redux";
const PageHeadingTitle = ({ title, desc, className }) => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const headingTitleStyle = {
    background: `${colorsData.data.linear}`,
    WebkitTextFillColor: "transparent", // Use WebkitTextFillColor instead of -webkit-text-fill-color
    WebkitBackgroundClip: "text", // Use WebkitBackgroundClip instead of -webkit-background-clip
  };
  return (
    <div className={`text-center mt-5 md:mt-10 mb-5 md:mb-10 ${className}`}>
      <h2
        style={headingTitleStyle}
        className={`text-2xl md:text-5xl mb-1 md:mb-4  font-semibold ${secondFont["second-font"]}`}
      >
        {title}
      </h2>
      <p className={`text-base md:text-lg font-medium ${thirdFont["third-font"]} md:w-[70%] mx-auto w-full`}>{desc}</p>
    </div>
  );
};

export default PageHeadingTitle;
