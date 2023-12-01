import React, { useEffect } from "react";
import PageHeadingTitle from "../../Components/UI/PageHeadingTitle";
import { baseURL } from "../../API/BaseURL";
import { useLoaderData, useLocation } from "react-router-dom";
import Container from "../../Components/UI/Container";
import secondFont from "../../SharedCSS/secondFont.module.css";
import thirdFont from "../../SharedCSS/thirdFont.module.css";
import { useSelector } from "react-redux";
import Driver from "../../Components/Driver/Driver";
import { handleBreakParagraphToLines } from "../../utils";
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
  console.log(data.data.content[0].desc);
  return (
    <Container>
      {/* <PageHeadingTitle
        className={`!mt-24`}
        title={data.data.pageHeading}
        desc={data.data.descHeading}
      /> */}
      <ul className={`!mt-32 flex flex-col`}>
        {data.data.content.map((ele) => (
          <div
            className={`mb-4 flex w-full flex-col gap-8 md:h-[800px] md:flex-row`}
          >
            <img
              src={ele.img}
              alt={ele.mainTitle}
              className={`rounded-lg  object-cover md:h-full md:w-1/2`}
            />
            <div className={`p-4 md:h-full md:w-1/2`}>
              {/* <h3 className={`text-6xl ${thirdFont["third-font"]} `}>
                {ele.mainTitle}
              </h3> */}
              <h2
                style={headingTitleStyle}
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${secondFont["second-font"]} mb-14`}
              >
                {ele.secTitle}
              </h2>
              <p
                className={`mt-4 md:text-xl`}
                dangerouslySetInnerHTML={{
                  __html: handleBreakParagraphToLines(ele.desc),
                }}
              ></p>
            </div>
          </div>
        ))}
      </ul>
      <Driver
        title={data.data.secondeTitle}
        driverImgs={data.data.secondSectionImgs}
      />
    </Container>
  );
};

export default About;
export const aboutLoader = async () => {
  const response = await fetch(`${baseURL}/about`);
  const data = await response.json();
  return data;
};
