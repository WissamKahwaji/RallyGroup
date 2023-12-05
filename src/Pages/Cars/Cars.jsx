import React, { useEffect } from "react";
import { baseURL } from "../../API/BaseURL";
import { NavLink, Outlet, useLoaderData, useLocation } from "react-router-dom";
import PageHeadingTitle from "../../Components/UI/PageHeadingTitle";
import { useSelector } from "react-redux";
import Container from "../../Components/UI/Container";
import { useTranslation } from "react-i18next";

const Cars = () => {
  const { t } = useTranslation();
  const data = useLoaderData();
  const colorsData = useSelector((state) => state.colorsSlice);

  const titleStyle = {
    background: `${colorsData.data.linear}`,
    WebkitTextFillColor: "transparent", // Use WebkitTextFillColor instead of -webkit-text-fill-color
    WebkitBackgroundClip: "text", // Use WebkitBackgroundClip instead of -webkit-background-clip
  };
  const { pathname } = useLocation();
  const CARS_CATEGORIES = [
    { title: "pages.cars.limo", href: "/" },
    { title: "pages.cars.rentalCars", href: "categoryOne" },
    { title: "pages.cars.busRent", href: "categoryThree" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className={``}>
      <div className={`relative`}>
        <img
          src={data.data.img}
          alt={data.data.pageHeading}
          className={`w-full`}
        />
        <PageHeadingTitle
          className={`absolute left-0 top-1/2 -translate-y-1/2 rounded-r-md bg-black bg-opacity-70 p-2`}
          title={data.data.pageHeading}
          desc={data.data.descHeading}
        />
      </div>
      <Container className={`mt-4`}>
        <ul
          className={`mx-auto mb-4 flex w-full items-center justify-between md:w-1/3`}
        >
          {CARS_CATEGORIES.map((carCategory, index) => (
            <li key={index}>
              <NavLink
                className={"capitalize"}
                style={({ isActive }) => ({
                  color: isActive ? colorsData.data.mainColor : "white",
                  fontSize: "20px",
                })}
                to={carCategory.href}
                end={true}
              >
                {t(carCategory.title)}{" "}
              </NavLink>
            </li>
          ))}
        </ul>
        <Outlet />
      </Container>

      {/* <h2 className={`text-center mt-20 text-5xl mb-10`}>Our Cars</h2> */}
      {/* <ul className={`flex flex-col`}>
        {data.data.categoryOneContent.map((ele, i) => (
          <li
            key={ele._id}
            className={`w-full h-[400px] flex ${
              i % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <img
              src={ele.img}
              alt={ele.title}
              // style={carStyle}
              className={`h-full  object-cover w-1/2`}
            />
            <div className={`w-1/2 flex items-center justify-center flex-col`}>
              <h3 style={titleStyle} className={`text-3xl mb-4`}>
                {ele.title}
              </h3>
              <p className={`text-sm px-4`}>{ele.desc}</p>
              {ele.carRate && (
                <div className={`self-start px-4 mt-4`}>
                  <h2 style={titleStyle} className={`mb-2`}>
                    Daily Rates
                  </h2>
                  <ul>
                    <li>
                      <span>Daily :</span> {ele.carRate.daily} AED
                    </li>
                    <li>
                      <span>Weekly :</span> {ele.carRate.weekly} AED
                    </li>
                    <li>
                      <span>Monthly :</span> {ele.carRate.monthly} AED
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Cars;
export const carsLoader = async () => {
  const response = await fetch(`${baseURL}/carPage`);
  const data = await response.json();
  console.log(data);
  return data;
};
