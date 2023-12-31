import React from "react";
import { baseURL } from "../../../API/BaseURL";
import { Link, useRouteLoaderData } from "react-router-dom";
import Container from "../../../Components/UI/Container";
import secondFont from "../../../SharedCSS/secondFont.module.css";
import thirdFont from "../../../SharedCSS/thirdFont.module.css";
import styles from "../../../SharedCSS/categoriesAnimation.module.css";
import useSelectDataDependOnLang from "../../../Hooks/useSelectDataDependOnLang";

import { useSelector } from "react-redux";
const CategoryTwo = () => {
  const { handleSelectDataDependOnLang, t } = useSelectDataDependOnLang();

  const data = useRouteLoaderData("carsRoute");
  console.log(data);
  const colorsData = useSelector((state) => state.colorsSlice);
  const titleStyle = {
    background: `${colorsData.data.linear}`,
    WebkitTextFillColor: "transparent", // Use WebkitTextFillColor instead of -webkit-text-fill-color
    WebkitBackgroundClip: "text", // Use WebkitBackgroundClip instead of -webkit-background-clip
  };
  const dailyRatesStyle = {
    border: `1px solid ${colorsData.data.mainColor}`,
  };
  const buttonOneStyle = {
    border: `2px solid ${
      colorsData.data ? colorsData.data.mainColor : "white"
    }`,
  };
  return (
    <ul className={`flex flex-col opacity-0 ${styles["categories-animation"]}`}>
      {data.data.categoryTwoContent.map((ele, i) => (
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
            className={`flex h-full w-full flex-col  justify-center p-8 md:w-[50%]`}
          >
            <h3
              style={titleStyle}
              className={`mb-4 text-center text-4xl font-semibold ${secondFont["second-font"]}`}
            >
              {ele.title}
            </h3>
            <ul className="flex list-disc flex-col gap-5 pl-8  md:gap-8">
              {ele.carRate.map((rate) => (
                <li key={rate._id}>
                  <Link to={"/"} state={{ scrollToSection: "bookNow" }}>
                    <div className="flex flex-row gap-3  pb-1  md:text-lg">
                      <p>{handleSelectDataDependOnLang(rate, "title")}</p>
                      <p className="flex gap-1">
                        <span>{rate.price}</span>
                        <span>{t("common.currency")}</span>
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryTwo;
