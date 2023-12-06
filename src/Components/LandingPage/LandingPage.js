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
    // backgroundImage: `url(${homeData.data.landingImg})`,
    backgroundSize: "cover", // Adjust as needed
    backgroundPosition: "center", // Adjust as needed
    backgroundAttachment: "fixed", // Set the background to fixed
  };
  return (
    <div className={`relative h-[80vh] overflow-hidden md:h-screen`}>
      <div className="video-container absolute left-0 top-0  h-full w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          controls
          className="  aspect-square  h-full w-full object-cover"
        >
          <source src={homeData.data.landingvideo} type="video/mp4" />
        </video>
      </div>

      <div
        className={`h-full w-full bg-fixed`}
        style={imageContainerStyle}
      ></div>
      <div
        className={`absolute left-0 top-0 h-full w-full bg-black bg-opacity-50`}
      ></div>
      <div
        className={`absolute  top-1/2 flex w-full -translate-y-1/2 flex-col items-center  pr-2  md:block `}
      >
        <h1 className={`text-center text-3xl md:text-5xl`}>
          {homeData.data.brandName}
        </h1>
        <p
          className={`my-2 text-center text-3xl md:text-5xl ${secondFont["second-font"]}`}
        >
          {homeData.data.location}
        </p>
        <p
          className={`text-2xl md:text-4xl ${thirdFont["third-font"]} text-center`}
        >
          {homeData.data.brandDesc}
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
