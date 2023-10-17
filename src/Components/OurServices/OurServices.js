import React from "react";
import Container from "../UI/Container";
import { useSelector } from "react-redux";
import PageHeadingTitle from "../UI/PageHeadingTitle";
import { Link } from "react-router-dom";

const OurServices = () => {
  const servicesData = useSelector((state) => state.servicesSlice);
  const colorsData = useSelector((state) => state.colorsSlice);
  const serviceItem = {
    // background: `${colorsData.data.linear}`,
  };
  const serviceItemTitle = {
    background: `${colorsData.data.linear}`,
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
  };

  // Function to truncate text to 60 characters with ellipsis
  const truncateText = (text) => {
    if (text.length > 60) {
      return text.slice(0, 60) + " ...";
    }
    return text;
  };

  return (
    <Container>
      <PageHeadingTitle
        title={servicesData.data.pageHeading}
        desc={servicesData.data.descHeading}
      />
      <Link
        to="/services"
        className={`block text-3xl my-4 text-center underline`}
      >
        Find Out More
      </Link>
      <ul
        className={`w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 mt-10`}
      >
        {servicesData.data.content.slice(0, 3).map((ele, i) => (
          <li key={ele._id} className={`h-[400px] flex items-center flex-col`}>
            <div className={`relative block w-full h-[200px]`}>
              {/* <div className={`absolute w-full h-full top-0 left-0`}></div> */}
              <img
                src={ele.img}
                alt={ele.desc}
                className={`absolute w-full h-full object-cover rounded-lg `}
              />
            </div>
            <div style={serviceItem} className={`p-2 rounded-lg text-center`}>
              <h3 style={serviceItemTitle} className={`text-2xl `}>
                {ele.title}
              </h3>
              <p className={``}>{truncateText(ele.desc)}</p>
            </div>
            {/* <div className={`relative block w-full h-full`}>
              <div className={`absolute w-full h-full top-0 left-0`}>
                <img
                  src={ele.img}
                  alt={ele.desc}
                  className={`w-full h-full object-cover rounded-lg blur-[1px] ${
                    i % 2 === 0 ? "scale-90" : "scale-100"
                  }`}
                />
              </div>
              <div
                style={serviceItem}
                className={`absolute -bottom-5 left-1/2 -translate-x-1/2 p-2 bg-black bg-opacity-70 rounded-lg text-center w-[80%] hover:bg-opacity-100 duration-300`}
              >
                <h3 style={serviceItemTitle} className={`text-2xl`}>
                  {ele.title}
                </h3>
                <p className={``}>{truncateText(ele.desc)}</p>
              </div>
            </div> */}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default OurServices;
