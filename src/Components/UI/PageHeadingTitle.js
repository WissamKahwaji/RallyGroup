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
    <div className={`mb-5 mt-5 text-center md:mb-10 md:mt-10 ${className}`}>
      <h2
        style={headingTitleStyle}
        className={`mb-1 text-2xl font-semibold md:mb-4  md:text-5xl ${secondFont["second-font"]}`}
      >
        {title}
      </h2>
      <p
        className={`text-base font-medium md:text-lg rtl:md:text-2xl ${thirdFont["third-font"]} mx-auto w-full md:w-[70%]`}
      >
        {desc}
      </p>
    </div>
  );
};

export default PageHeadingTitle;
