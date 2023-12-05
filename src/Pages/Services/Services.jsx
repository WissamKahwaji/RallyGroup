import React, { useEffect } from "react";
import { baseURL } from "../../API/BaseURL";
import PageHeadingTitle from "../../Components/UI/PageHeadingTitle";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import secondFont from "../../SharedCSS/secondFont.module.css";
import thirdFont from "../../SharedCSS/thirdFont.module.css";
import Container from "../../Components/UI/Container";
import useSelectDataDependOnLang from "../../Hooks/useSelectDataDependOnLang";

const Services = () => {
  const { handleSelectDataDependOnLang, t } = useSelectDataDependOnLang();

  const data = useLoaderData();

  const colorsData = useSelector((state) => state.colorsSlice);
  const titleStyle = {
    color: colorsData.data.mainColor,
  };
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className={`mt-32 min-h-screen`}>
      <PageHeadingTitle
        className={`!mb-4`}
        title={handleSelectDataDependOnLang(data.data, "pageHeading")}
        desc={handleSelectDataDependOnLang(data.data, "descHeading")}
      />
      <Container>
        <ul className={`mt-20 flex flex-col `}>
          {data.data.content.map((ele, i) => (
            <li key={i}>
              <div
                className={`flex w-full  md:h-[500px] ${
                  i % 2 === 0
                    ? "flex-col md:flex-row"
                    : "flex-col md:flex-row-reverse"
                }`}
              >
                <img
                  src={ele.img}
                  alt={ele.title}
                  className={`h-full w-full rounded-lg object-cover md:w-[50%]`}
                />
                <div
                  className={`flex h-full w-full flex-col items-center justify-center gap-5 p-8 md:w-[50%]`}
                >
                  <h3
                    style={titleStyle}
                    className={`mb-1 mt-3 text-center text-3xl font-medium ${thirdFont["third-font"]}`}
                  >
                    {handleSelectDataDependOnLang(ele, "title")}
                  </h3>
                  <p className={`text-center text-lg font-light`}>
                    {handleSelectDataDependOnLang(ele, "desc")}
                  </p>
                  {(ele.title === "Rent" ||
                    ele.title === "Ultra Limo Fleet" ||
                    ele.title === "Bus Rent") && (
                    <div>
                      <Link
                        to={
                          ele.title === "Rent"
                            ? "../cars/categoryOne"
                            : ele.title === "Ultra Limo Fleet"
                              ? "../cars"
                              : "../cars/categoryThree"
                        }
                        className="underline"
                      >
                        {t("common.findOutMore")}{" "}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Services;
export const servicesLoader = async () => {
  const response = await fetch(`${baseURL}/services`);
  const data = await response.json();
  return data;
};
