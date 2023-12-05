import React, { useLayoutEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import { baseURL } from "../API/BaseURL";
import Footer from "../Components/Footer/Footer";
import LastFooter from "../Components/LastFooter/LastFooter";
import LoadingPage from "./LoadingPage/LoadingPage";

const Root = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    document.documentElement.dir = localStorage.getItem("dir") || "ltr";
  }, []);
  return (
    <>
      {navigation.state === "loading" ? (
        <LoadingPage />
      ) : (
        <>
          <Navbar data={data.data} />
          <Outlet />
          <Footer />
          <LastFooter />
        </>
      )}
    </>
  );
};

export default Root;
export const rootLoader = async () => {
  const response = await fetch(`${baseURL}/home`);
  const data = await response.json();
  return data;
};
