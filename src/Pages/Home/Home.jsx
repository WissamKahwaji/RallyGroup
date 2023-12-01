import React, { useEffect } from "react";
import LandingPage from "../../Components/LandingPage/LandingPage";
import OurServices from "../../Components/OurServices/OurServices";
import Booking from "../../Components/Booking/Booking";
import HomeCars from "../../Components/HomeCars/HomeCars";
import OurClients from "../../Components/OurClients/OurClients";
import { useLocation } from "react-router-dom";

const Home = () => {
  // const { pathname } = useLocation();

  const location = useLocation();

  useEffect(() => {
    // Scroll to the desired section if scrollToSection is present in the location state
    if (location.state && location.state.scrollToSection) {
      const sectionId = location.state.scrollToSection;
      console.log(sectionId);
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);
  return (
    <>
      <LandingPage />
      <Booking />
      <OurServices />
      <HomeCars />
      <OurClients />
    </>
  );
};

export default Home;
