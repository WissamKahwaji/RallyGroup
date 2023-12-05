import React from "react";
import Container from "../UI/Container";
import PageHeadingTitle from "../UI/PageHeadingTitle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CarouselComponent from "../UI/CarouselComponent";
import useSelectDataDependOnLang from "../../Hooks/useSelectDataDependOnLang";

const HomeCars = () => {
  const { handleSelectDataDependOnLang, t } = useSelectDataDependOnLang();
  const carData = useSelector((state) => state.carSlice);
  console.log(carData);
  const colorsData = useSelector((state) => state.colorsSlice);
  const titleStyle = {
    background: `${colorsData.data.linear}`,
    WebkitTextFillColor: "transparent", // Use WebkitTextFillColor instead of -webkit-text-fill-color
    WebkitBackgroundClip: "text", // Use WebkitBackgroundClip instead of -webkit-background-clip
  };
  const truncateText = (text) => {
    if (text?.length > 60) {
      return text.slice(0, 30) + " ...";
    }
    return text;
  };

  const itemsRental = carData.data.categoryOneContent.map((ele) => (
    <li
      className={`flex h-[400px] flex-col items-center justify-center rounded-lg p-2`}
      key={ele._i}
    >
      <img
        src={ele.img}
        alt={ele.title}
        className={`object-c h-[70%] w-full rounded-lg`}
      />
      <div className={`mt-2 `}>
        <p style={titleStyle} className={`text-xl`}>
          {ele.title}
        </p>
        <p className={``}>{truncateText(ele.desc)}</p>
      </div>
    </li>
  ));

  const itemsLimo = carData.data.categoryTwoContent.map((ele) => (
    <li
      className={`flex h-[400px] flex-col items-center justify-center rounded-lg p-2`}
      key={ele._i}
    >
      <img
        src={ele.img}
        alt={ele.title}
        className={`h-[70%] w-full rounded-lg object-cover`}
      />
      <div className={`mt-2 `}>
        <p style={titleStyle} className={`text-xl`}>
          {ele.title}
        </p>
        <p className={``}>
          {truncateText(handleSelectDataDependOnLang(ele, "desc"))}
        </p>
      </div>
    </li>
  ));
  const buttonOneStyle = {
    border: `2px solid ${colorsData.data.mainColor}`,
  };
  return (
    <Container>
      <PageHeadingTitle
        title={t("pages.home.cars.sectionHead.title")}
        desc={t("pages.home.cars.sectionHead.title")}
      />
      <Link to="/cars" className={`mb-4 block text-center text-3xl underline`}>
        {t("common.findOutMore")}
      </Link>
      <div className={`mt-2 flex flex-col`}>
        <Link
          to="/cars"
          className={`mr-2 block self-start rounded-2xl px-4 py-1 text-2xl`}
          style={buttonOneStyle}
        >
          {t("pages.home.cars.limo")}{" "}
        </Link>
        <CarouselComponent items={itemsLimo} mobileViewItems={1} />
      </div>
      {/* <div className={`flex flex-col mt-2`}>
        <Link
          to="/cars/categoryTwo"
          className={`px-4 py-1 rounded-2xl text-2xl mr-2 block self-start`}
          style={buttonOneStyle}
        >
          Rental Cars
        </Link>
        <CarouselComponent items={itemsRental} mobileViewItems={1} />
      </div> */}
      {/* <ul className={`grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-10`}>
        {carData.data.categoryOneContent.map((ele) => (
          <li
            className={`flex items-center flex-col justify-center p-2 rounded-lg h-[400px]`}
            key={ele._i}
          >
            <img
              src={ele.img}
              alt={ele.title}
              className={`rounded-lg h-[70%] w-full object-cover`}
            />
            <div className={`mt-2 `}>
              <p style={titleStyle} className={`text-xl`}>
                {ele.title}
              </p>
              <p className={``}>{truncateText(ele.desc)}</p>
            </div>
          </li>
        ))}
      </ul> */}
    </Container>
  );
};

export default HomeCars;
