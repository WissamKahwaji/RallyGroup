import React from "react";
import { GiCarWheel } from "react-icons/gi";
import { useSelector } from "react-redux";
import secondFont from "../../SharedCSS/secondFont.module.css";
const LoadingPage = () => {
  //   const homeData = useSelector((state) => state.homeSlice);
  return (
    <div className={`h-screen w-full flex items-center justify-center`}>
      <p className={`text-5xl ${secondFont["second-font"]}`}>Rally Group</p>
      <GiCarWheel className={`text-5xl animate-spin ml-2`} />
    </div>
  );
};

export default LoadingPage;
