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
                    <div className="flex flex-row gap-3  pb-1  md:text-xl">
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
            {/* <p
              className={`text-lg mb-2 ${thirdFont["third-font"]} text-center`}
            >
              {ele.desc}
            </p> */}
            {/* {ele.carRate && (
              <ul
                style={dailyRatesStyle}
                className={` flex justify-between items-center flex-col mt-5 md:flex-row w-full p-2 rounded-md`}
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
            )}
            <button
              className={`px-4 py-1 mt-10 rounded-2xl text-2xl mr-2`}
              style={buttonOneStyle}
            >
              Book Now
            </button> */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryTwo;
