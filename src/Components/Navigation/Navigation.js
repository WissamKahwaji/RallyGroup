import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./Navigation.module.css";
const Navigation = ({ onClick, isShowing }) => {
  const homeData = useSelector((state) => state.homeSlice);
  const colorsData = useSelector((state) => state.colorsSlice);
  const subMenuStyle = {
    border: `1px solid ${colorsData.data.mainColor}`,
  };
  const subMenuTriangleStyle = {
    borderTop: `10px  solid  transparent`,
    borderBottom: `10px  solid  transparent`,
    borderRight: `10px  solid  transparent`,
    borderLeft: `10px  solid  ${colorsData.data.mainColor}`,

    // borderBottom: `10px  solid  ${colorsData.data.mainColor}`,
  };
  const exitButtonStyle = {
    background: `${colorsData.data.linear}`,
    WebkitTextFillColor: "transparent", // Use WebkitTextFillColor instead of -webkit-text-fill-color
    WebkitBackgroundClip: "text", // Use WebkitBackgroundClip instead of -webkit-background-clip
  };
  const buttonOneStyle = {
    border: `2px solid ${colorsData.data.mainColor}`,
  };
  const selectBoxStyle = {
    border: `2px solid ${colorsData.data.mainColor}`,
  };
  const buttonTwoStyle = {
    background: `${colorsData.data.linear}`,
    // border: `2px solid ${colorsData.data.mainColor}`,
  };
  const [isSubMenu, setIsSubMenu] = useState(false);
  const onMouseEnterHandler = () => {
    setIsSubMenu(true);
  };
  const onMouseLeaveHandler = () => {
    setIsSubMenu(false);
  };
  return (
    <div
      className={`absolute  top-0 h-screen bg-black w-2/3 md:w-[25%] ${
        isShowing ? "right-0" : "-right-[500px]"
      } duration-300`}
    >
      <div className={`flex justify-end pt-5 pr-10 text-2xl`}>
        <AiOutlineClose
          style={exitButtonStyle}
          className={`cursor-pointer`}
          onClick={onClick}
        />
      </div>
      <div>
        <img src={homeData.data.logoImg} alt={homeData.data.brandName} />
      </div>
      <ul className={`flex flex-col items-center justify-center`}>
        <li className={`py-2 text-2xl w-full text-center`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`py-2 text-2xl w-full text-center`}>
          <Link to="/services">Services</Link>
        </li>
        <li
          className={`py-2 text-2xl relative w-full text-center`}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <Link to="/cars">Cars</Link>
          <ul
            style={subMenuStyle}
            className={`${
              isSubMenu ? "block" : "hidden"
            } absolute bg-black rounded-md py-2 px-4 top-1/2 -translate-y-1/2 -left-4 md:left-0 opacity-0 duration-150 ${
              styles["sub-menu"]
            }`}
          >
            <span
              style={subMenuTriangleStyle}
              className={`absolute top-1/2 -translate-y-1/2 -right-5`}
            ></span>
            <li className={`py-1 text-xl relative`}>
              <Link to="/cars">Limo</Link>
            </li>
            <li className={`py-1 text-xl relative`}>
              <Link to="/cars/categoryTwo">Rental</Link>
            </li>
          </ul>

          {/* <label htmlFor="selectBox" className={`mb-2`}>
          </label>
          <select
            id="selectBox"
            className={`bg-transparent rounded-lg outline-none`}
            style={selectBoxStyle}
          >
            <option value="option1">
              <Link to="/cars">Limo Cars</Link>
            </option>
            <option value="option2">
              <Link>Rental Cars</Link>
            </option>
          </select> */}
          {/* <Link to="/cars">Cars</Link> */}
        </li>
        {/* <li className={`py-2 text-2xl`}>
          <Link to="/rates">Offers</Link>
        </li> */}
        <li className={`py-2 text-2xl w-full text-center`}>
          <Link to="/about">About</Link>
        </li>
        <li className={`py-2 w-full text-center`}>
          <button
            className={`px-2 py-1 rounded-2xl text-2xl mr-2`}
            style={buttonOneStyle}
          >
            Book Now
          </button>
        </li>
        <li className={`py-4 w-full text-center`}>
          <button
            className={`px-4 py-1 rounded-2xl text-2xl`}
            style={buttonTwoStyle}
          >
            Limo Fleet
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
