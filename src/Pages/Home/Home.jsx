import React, { useEffect } from "react";
import LandingPage from "../../Components/LandingPage/LandingPage";
import OurServices from "../../Components/OurServices/OurServices";
import Booking from "../../Components/Booking/Booking";
import HomeCars from "../../Components/HomeCars/HomeCars";
import OurClients from "../../Components/OurClients/OurClients";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
