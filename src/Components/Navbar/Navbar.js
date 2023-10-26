import React, { useEffect, useState } from "react";
import Container from "../UI/Container";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import { Link, useLocation } from "react-router-dom";
const Navbar = ({ data }) => {
  const colorsData = useSelector((state) => state.colorsSlice);
  console.log(colorsData);
  const buttonOneStyle = {
    border: `2px solid ${
      colorsData.data ? colorsData.data.mainColor : "white"
    }`,
  };
  const buttonTwoStyle = {
    background: `${colorsData.data ? colorsData.data.linear : "white"}`,
    // border: `2px solid ${colorsData.data.mainColor}`,
  };
  const [isShowing, setIsShowing] = useState(false);
  const navigationCloseHandler = () => {
    setIsShowing(false);
  };
  const navigationOpenHandler = () => {
    setIsShowing(true);
  };
  const location = useLocation(); // Access the current route location

  useEffect(() => {
    setIsShowing(false); // Set isNav to false when the route changes
  }, [location]);
  return (
    <nav className={`fixed w-full top-0 rounded-b-md z-50 backdrop-blur-md`}>
      <Navigation onClick={navigationCloseHandler} isShowing={isShowing} />
      <Container className={`flex justify-between items-center`}>
        <Link to="/">
          <img
            src={data.logoImg}
            alt={data.brandName}
            className={`w-32 md:w-52`}
          />
        </Link>
        <div className={`hidden md:block`}>
          <button
            className={`px-4 py-1 rounded-2xl text-2xl mr-2`}
            style={buttonOneStyle}
          >
            Book Now
          </button>
          <button
            className={`px-4 py-1 rounded-2xl text-2xl`}
            style={buttonTwoStyle}
          >
            Limo Fleet
          </button>
        </div>
        <div>
          <RxHamburgerMenu
            className={`text-5xl cursor-pointer`}
            onClick={navigationOpenHandler}
          />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
