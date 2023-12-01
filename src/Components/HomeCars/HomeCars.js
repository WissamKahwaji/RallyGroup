import React from "react";
import Container from "../UI/Container";
import PageHeadingTitle from "../UI/PageHeadingTitle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CarouselComponent from "../UI/CarouselComponent";

const HomeCars = () => {
  const carData = useSelector((state) => state.carSlice);
  console.log(carData);
  const colorsData = useSelector((state) => state.colorsSlice);
  const titleStyle = {
    background: `${colorsData.data.linear}`,
    WebkitTextFillColor: "transparent", // Use WebkitTextFillColor instead of -webkit-text-fill-color
    WebkitBackgroundClip: "text", // Use WebkitBackgroundClip instead of -webkit-background-clip
  };
  const truncateText = (text) => {
    if (text.length > 60) {
      return text.slice(0, 30) + " ...";
    }
    return text;
  };

  const itemsRental = carData.data.categoryOneContent.map((ele) => (
    <li
      className={`flex items-center flex-col justify-center p-2 rounded-lg h-[400px]`}
      key={ele._i}
    >
      <img
        src={ele.img}
        alt={ele.title}
        className={`rounded-lg h-[70%] w-full object-c`}
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
  ));
  const buttonOneStyle = {
    border: `2px solid ${colorsData.data.mainColor}`,
  };
  return (
    <Container>
      <PageHeadingTitle title="Cars" desc="Check Our Cars" />
      <Link to="/cars" className={`block text-3xl mb-4 text-center underline`}>
        Find Out More
      </Link>
      <div className={`flex flex-col mt-2`}>
        <Link
          to="/cars"
          className={`px-4 py-1 rounded-2xl text-2xl mr-2 block self-start`}
          style={buttonOneStyle}
        >
          Limo Cars
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
