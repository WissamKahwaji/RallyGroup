import React, { useEffect } from "react";
import { baseURL } from "../../API/BaseURL";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import secondFont from "../../SharedCSS/secondFont.module.css";
import thirdFont from "../../SharedCSS/thirdFont.module.css";
import Container from "../../Components/UI/Container";
import PageHeadingTitle from "../../Components/UI/PageHeadingTitle";

const Rates = () => {
  const data = useLoaderData();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`min-h-screen`}>
      <div className={`relative h-full w-full `}>
        <img
          src={data.data.imgHeading}
          alt={data.data.pageHeading}
          className={``}
        />
        <span
          className={`absolute left-0 top-0 h-full w-full bg-black bg-opacity-50`}
        ></span>
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          <h2 className={`text-5xl ${thirdFont["third-font"]}`}>
            {data.data.pageHeading}
          </h2>
          <p></p>
        </div>
      </div>
      <Container className={`mt-10 `}>
        <PageHeadingTitle title="Our Rates" />
        <ul className="flex flex-col gap-12">
          {data.data.content.map((car) => (
            <li
              key={car._id}
              className={` grid grid-cols-1  gap-5 rounded-md  md:grid-cols-2`}
            >
              <div className="h-[400px] md:h-[500px]">
                <img
                  src={car.img}
                  alt={car._id}
                  className={`h-full w-full rounded-md  object-cover`}
                />
              </div>

              <div className="flex flex-col gap-16 py-5">
                <p className=" text-center  text-2xl md:text-4xl  ">
                  {car.title}
                </p>
                <ul className="flex list-disc flex-col gap-5 pl-8  md:gap-8">
                  {car.carRate.map((rate) => (
                    <li key={rate._id}>
                      <Link to={"/"} state={{ scrollToSection: "bookNow" }}>
                        <div className="flex flex-row gap-3  pb-1  md:text-xl">
                          <p>{rate.title}</p>
                          <p>{`${rate.price} AED`}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Rates;
export const ratesLoader = async () => {
  const response = await fetch(`${baseURL}/rates`);
  const data = await response.json();
  return data;
};
