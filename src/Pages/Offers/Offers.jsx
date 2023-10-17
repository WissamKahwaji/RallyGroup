import React, { useEffect } from "react";
import { baseURL } from "../../API/BaseURL";
import { useLoaderData, useLocation } from "react-router-dom";
import secondFont from "../../SharedCSS/secondFont.module.css";
import thirdFont from "../../SharedCSS/thirdFont.module.css";
import Container from "../../Components/UI/Container";
import PageHeadingTitle from "../../Components/UI/PageHeadingTitle";
const Offers = () => {
  const data = useLoaderData();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className={`min-h-screen`}>
      {/* <div className={`relative w-full h-full `}>
        <img
          src={data.data.imgHeading}
          alt={data.data.pageHeading}
          className={``}
        />
        <span
          className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50`}
        ></span>
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          <h2 className={`text-5xl ${thirdFont["third-font"]}`}>
            {data.data.pageHeading}
          </h2>
          <p></p>
        </div>
      </div>
      <Container className={`mt-10 `}>
        <PageHeadingTitle title="Our Rates" />
        <ul className={`grid grid-cols-2 gap-5`}>
          {data.data.content.map((ele) => (
            <li
              className={`relative h-[400px] border border-white rounded-md overflow-hidden`}
            >
              <img
                src={ele.img}
                alt={ele._id}
                className={`w-full h-full object-cover blur-sm duration-300 hover:blur-0`}
              />
              <p
                className={`absolute px-8 py-4 bg-black bg-opacity-70 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center `}
              >
                {ele.desc}
              </p>
            </li>
          ))}
        </ul>
      </Container> */}
    </div>
  );
};

export default Offers;
// export const ratesLoader = async () => {
//   const response = await fetch(`${baseURL}/rates`);
//   const data = await response.json();
//   return data;
// };
