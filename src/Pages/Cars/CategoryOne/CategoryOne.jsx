import React from "react";
import { baseURL } from "../../../API/BaseURL";
import { useRouteLoaderData } from "react-router-dom";
import Container from "../../../Components/UI/Container";
import secondFont from "../../../SharedCSS/secondFont.module.css";
import thirdFont from "../../../SharedCSS/thirdFont.module.css";
import { useSelector } from "react-redux";
import styles from "../../../SharedCSS/categoriesAnimation.module.css";
import useSelectDataDependOnLang from "../../../Hooks/useSelectDataDependOnLang";

const CategoryTwo = () => {
  const data = useRouteLoaderData("carsRoute");
  const { handleSelectDataDependOnLang } = useSelectDataDependOnLang();

  const colorsData = useSelector((state) => state.colorsSlice);
  const titleStyle = {
    background: `${colorsData.data.linear}`,
    WebkitTextFillColor: "transparent", // Use WebkitTextFillColor instead of -webkit-text-fill-color
    WebkitBackgroundClip: "text", // Use WebkitBackgroundClip instead of -webkit-background-clip
  };
  const dailyRatesStyle = {
    border: `1px solid ${colorsData.data.mainColor}`,
  };
  return (
    <ul
      className={`flex scale-[0.9] flex-col opacity-0 ${styles["categories-animation"]}`}
    >
      {data.data.categoryOneContent.map((ele, i) => (
        <li
          key={i}
          className={`flex w-full md:h-[500px] ${
            i % 2 === 0
              ? "flex-col md:flex-row"
              : "flex-col md:flex-row-reverse"
          }`}
        >
          <img
            src={ele.img}
            alt={ele.title}
            className={`h-full w-full rounded-lg object-cover md:w-[50%]`}
          />
          <div
            className={`flex h-full w-full flex-col items-center justify-center p-8 md:w-[50%]`}
          >
            <h3
              style={titleStyle}
              className={`mb-4 text-2xl font-semibold ${secondFont["second-font"]}`}
            >
              {ele.title}
            </h3>
            <p
              className={`mb-2 text-lg ${thirdFont["third-font"]} text-center`}
            >
              {handleSelectDataDependOnLang(ele, "desc")}
            </p>
            {/* {ele.carRate && (
              <ul
                style={dailyRatesStyle}
                className={` flex justify-between items-center flex-col md:flex-row w-full p-2 rounded-md`}
              >
                <li>
                  <span className={`text-lg`}>Daily : </span>
                  <span>{ele.carRate.daily} AED</span>
                </li>
                <li>
                  <span className={`text-lg`}>Weekly : </span>
                  <span>{ele.carRate.weekly} AED</span>
                </li>
                <li>
                  <span className={`text-lg`}>Monthly : </span>
                  <span>{ele.carRate.monthly} AED</span>
                </li>
              </ul>
            )} */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryTwo;
