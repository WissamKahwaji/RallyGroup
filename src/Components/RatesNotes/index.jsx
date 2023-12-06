import React from "react";
import { useSelector } from "react-redux";
import useSelectDataDependOnLang from "../../Hooks/useSelectDataDependOnLang";
import secondFont from "../../SharedCSS/secondFont.module.css";

const RatesNotes = (data) => {
  const { handleSelectDataDependOnLang } = useSelectDataDependOnLang();
  const colorsData = useSelector((state) => state.colorsSlice);
  const headingTitleStyle = {
    background: `${colorsData.data.linear}`,
    WebkitTextFillColor: "transparent", // Use WebkitTextFillColor instead of -webkit-text-fill-color
    WebkitBackgroundClip: "text", // Use WebkitBackgroundClip instead of -webkit-background-clip
  };
  console.log(data, "data");
  return (
    <div className="my-12 flex flex-col items-center justify-center gap-16 text-lg">
      <div className="uppercase">
        <p>{handleSelectDataDependOnLang(data.data, "titleOne")}</p>
        <p>{handleSelectDataDependOnLang(data.data, "titleTwo")}</p>
      </div>
      <p>{handleSelectDataDependOnLang(data.data, "titleThree")}</p>
      <div className="flex flex-col items-center justify-center gap-5">
        <p
          style={headingTitleStyle}
          className={`text-center ${secondFont["second-font"]} text-5xl`}
        >
          {handleSelectDataDependOnLang(data.data, "titleFour")}
        </p>
        <p>{handleSelectDataDependOnLang(data.data, "cancellationPolicy")}</p>
      </div>
    </div>
  );
};

export default RatesNotes;
