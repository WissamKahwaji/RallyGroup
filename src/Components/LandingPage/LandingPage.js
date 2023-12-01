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
    // <div className=" relative h-0 w-full  pb-[100vh]">
    //   <video
    //     autoPlay
    //     loop
    //     muted
    //     className=" absolute left-0 top-0 h-screen w-screen"
    //   >
    //     <source src={homeData.data.landingvideo} type="video/mp4" />
    //   </video>
    // </div>

    <div className={`relative h-[80vh] overflow-hidden md:h-screen`}>
      <div className="absolute left-0 top-0  h-full w-full">
        <div className=" relative h-0 w-full pt-[80vh] md:pt-[100vh]">
          <video
            autoPlay
            loop
            muted
            className=" absolute left-0 top-0 h-full  w-full object-cover"
          >
            <source src={homeData.data.landingvideo} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        className={`h-full w-full bg-fixed`}
        style={imageContainerStyle}
      ></div>
      <div
        className={`absolute left-0 top-0 h-full w-full bg-black bg-opacity-50`}
      ></div>
      <div className={`absolute left-0 top-36 -translate-y-1/2 md:top-1/2`}>
        <img
          src={homeData.data.logoImg}
          alt={homeData.data.brandName}
          className={`w-[40rem]`}
        />
      </div>
      <div
        className={`absolute right-0 top-1/2 flex -translate-y-1/2 flex-col items-center pr-2 md:block`}
      >
        <h1 className={`text-3xl md:text-5xl`}>{homeData.data.brandName}</h1>
        <p className={`my-2 text-3xl md:text-5xl ${secondFont["second-font"]}`}>
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
