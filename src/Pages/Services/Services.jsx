import React, { useEffect } from "react";
import { baseURL } from "../../API/BaseURL";
import PageHeadingTitle from "../../Components/UI/PageHeadingTitle";
import { useLoaderData, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import secondFont from "../../SharedCSS/secondFont.module.css";
import thirdFont from "../../SharedCSS/thirdFont.module.css";
import Container from "../../Components/UI/Container";
const Services = () => {
  const data = useLoaderData();
  console.log(data.data.content);
  const colorsData = useSelector((state) => state.colorsSlice);
  const titleStyle = {
    color: colorsData.data.mainColor,
  };
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className={`min-h-screen mt-32`}>
      <PageHeadingTitle
        className={`!mb-4`}
        title={data.data.pageHeading}
        desc={data.data.descHeading}
      />
      <Container>
        <ul className={`flex flex-col lg:grid lg:grid-cols-3 md:gap-5`}>
          {data.data.content.map((ele, i) => (
            <li
              key={ele._id}
              className={`relative scale-90 hover:scale-100 duration-200 flex flex-col items-center`}
            >
              <img
                className={`object-cover rounded-lg grayscale hover:grayscale-0 duration-200 w-full h-52`}
                src={ele.img}
                alt={ele.title}
              />
              <div className={``}>
                <h3
                  style={titleStyle}
                  className={`text-xl text-center font-medium mt-3 mb-1 ${thirdFont["third-font"]}`}
                >
                  {ele.title}
                </h3>
                <p className={`text-lg text-center font-light`}>{ele.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Services;
export const servicesLoader = async () => {
  const response = await fetch(`${baseURL}/services`);
  const data = await response.json();
  return data;
};
