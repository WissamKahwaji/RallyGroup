import React from "react";
import { useSelector } from "react-redux";

import secondFont from "../../SharedCSS/secondFont.module.css";

const Driver = ({ title, driverImgs }) => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const headingTitleStyle = {
    background: `${colorsData.data.linear}`,
    WebkitTextFillColor: "transparent", // Use WebkitTextFillColor instead of -webkit-text-fill-color
    WebkitBackgroundClip: "text", // Use WebkitBackgroundClip instead of -webkit-background-clip
  };
  return (
    <div className=" mx-2 mt-14 flex flex-col gap-12 sm:mx-14 md:mx-16 lg:mx-24">
      <h2
        style={headingTitleStyle}
        className={`text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${secondFont["second-font"]} mb-14`}
      >
        {title}
      </h2>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 ">
        {driverImgs.map((driverImg, index) => (
          <div key={index} className="h-[300px] md:h-[350px] lg:h-[400px]">
            <img
              className="h-full w-full object-cover"
              src={driverImg}
              alt=""
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Driver;
