import React, { useEffect } from "react";
import PageHeadingTitle from "../../Components/UI/PageHeadingTitle";
import { baseURL } from "../../API/BaseURL";
import { useLoaderData, useLocation } from "react-router-dom";
import Container from "../../Components/UI/Container";
import secondFont from "../../SharedCSS/secondFont.module.css";
import thirdFont from "../../SharedCSS/thirdFont.module.css";
import { useSelector } from "react-redux";
const About = () => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const headingTitleStyle = {
    background: `${colorsData.data.linear}`,
    WebkitTextFillColor: "transparent", // Use WebkitTextFillColor instead of -webkit-text-fill-color
    WebkitBackgroundClip: "text", // Use WebkitBackgroundClip instead of -webkit-background-clip
  };
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  const data = useLoaderData();
  return (
    <Container>
      <PageHeadingTitle
        className={`!mt-24`}
        title={data.data.pageHeading}
        desc={data.data.descHeading}
      />
      <ul className={`flex flex-col`}>
        {data.data.content.map((ele) => (
          <li className={`md:h-[300px] w-full flex flex-col md:flex-row mb-4`}>
            <img
              src={ele.img}
              alt={ele.mainTitle}
              className={`md:h-full  object-cover md:w-1/2 rounded-lg`}
            />
            <div className={`p-4 md:h-full md:w-1/2`}>
              <h3 className={`text-3xl ${thirdFont["third-font"]} mb-4`}>
                {ele.mainTitle}
              </h3>
              <h2
                style={headingTitleStyle}
                className={`text-5xl ${secondFont["second-font"]}`}
              >
                {ele.secTitle}
              </h2>
              <p className={`mt-4`}>{ele.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default About;
export const aboutLoader = async () => {
  const response = await fetch(`${baseURL}/about`);
  const data = await response.json();
  return data;
};
