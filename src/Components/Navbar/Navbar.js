import React, { useEffect, useState } from "react";
import Container from "../UI/Container";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useNavigateToBook from "../../Hooks/useNavigateToBook";

const Navbar = ({ data }) => {
  const colorsData = useSelector((state) => state.colorsSlice);
  const navigate = useNavigate();
  const handleNavigateToBookSection = useNavigateToBook();
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
    <nav className={`fixed top-0 z-50 w-full rounded-b-md backdrop-blur-md`}>
      <Navigation onClick={navigationCloseHandler} isShowing={isShowing} />

      <Container className={`flex items-center justify-between`}>
        <Link to="/">
          <img
            src={data.logoImg}
            alt={data.brandName}
            className={`w-32 md:w-52`}
          />
        </Link>
        <div className={`hidden md:flex`}>
          <Link className={`mr-10 text-2xl`} to="/">
            Home
          </Link>
          <Link className={`mr-10 text-2xl`} to="/services">
            Services
          </Link>
          <Link className={`mr-10 text-2xl`} to="/about">
            About
          </Link>
          <Link className={`mr-10 text-2xl`} to="/rates">
            Rates
          </Link>
          <Link className={`mr-10 text-2xl`} to="/">
            Inquiries
          </Link>
        </div>
        <div className={`hidden md:block`}>
          <button
            className={`mr-2 rounded-2xl px-4 py-1 text-2xl`}
            style={buttonOneStyle}
            onClick={handleNavigateToBookSection}
          >
            Book Now
          </button>
          <button
            className={`rounded-2xl px-4 py-1 text-2xl`}
            style={buttonTwoStyle}
            onClick={() => navigate("/cars")}
          >
            Rally Fleet
          </button>
        </div>

        <div className={`flex md:hidden`}>
          <RxHamburgerMenu
            className={`cursor-pointer text-5xl md:hidden`}
            onClick={navigationOpenHandler}
          />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
