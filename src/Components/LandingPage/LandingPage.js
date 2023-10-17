import React from "react";
import { useSelector } from "react-redux";
import secondFont from "../../SharedCSS/secondFont.module.css";
import thirdFont from "../../SharedCSS/thirdFont.module.css";
const LandingPage = () => {
  const homeData = useSelector((state) => state.homeSlice);
  console.log(homeData);
  const imageContainerStyle = {
    position: "relative",
    height: "100vh", // Ensure the container takes the full viewport height
    backgroundImage: `url(${homeData.data.landingImg})`,
    backgroundSize: "cover", // Adjust as needed
    backgroundPosition: "center", // Adjust as needed
    backgroundAttachment: "fixed", // Set the background to fixed
  };
  return (
    <div className={`relative h-screen`}>
      <div className={`h-full w-full bg-fixed`} style={imageContainerStyle}>
        {/* <img
          src={homeData.data.landingImg}
          alt={homeData.data.brandName}
          className={`w-full h-full object-cover`}
        /> */}
      </div>
      <div
        className={`absolute w-full h-full top-0 left-0 bg-black bg-opacity-50`}
      ></div>
      <div className={`absolute top-36 md:top-1/2 -translate-y-1/2 left-0`}>
        <img
          src={homeData.data.logoImg}
          alt={homeData.data.brandName}
          className={`w-[40rem]`}
        />
      </div>
      <div className={`flex flex-col items-center md:block absolute top-1/2 -translate-y-1/2 right-0 pr-2`}>
        <h1 className={`text-3xl md:text-5xl`}>{homeData.data.brandName}</h1>
        <p className={`text-3xl md:text-5xl my-2 ${secondFont["second-font"]}`}>
          {homeData.data.location}
        </p>
        <p className={`text-2xl md:text-4xl ${thirdFont["third-font"]} text-center`}>
          {homeData.data.brandDesc}
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
