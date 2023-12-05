import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import Container from "../UI/Container";
import Navigation from "../Navigation/Navigation";
import { Link, useLocation } from "react-router-dom";
import useNavigateToBook from "../../Hooks/useNavigateToBook";
import SelectLang from "../UI/SelectLang";
import { NAV_LINKS } from "../../constant/navLinks";

const Navbar = ({ data }) => {
  const { t } = useTranslation();
  const colorsData = useSelector((state) => state.colorsSlice);
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
        <div className={`hidden gap-5 md:flex`}>
          {NAV_LINKS.map((link) => (
            <Link className="text-2xl capitalize " to={link.href}>
              {t(link.title)}
            </Link>
          ))}
        </div>
        <div className={`hidden flex-row gap-2 md:flex`}>
          <button
            className={` rounded-2xl px-4 py-1 text-2xl`}
            style={buttonOneStyle}
            onClick={handleNavigateToBookSection}
          >
            {t("common.bookNow")}
          </button>
          <button
            className={`rounded-2xl px-4 py-1 text-2xl capitalize`}
            style={buttonTwoStyle}
          >
            {t("common.brand")}
          </button>
        </div>
        <SelectLang />
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
