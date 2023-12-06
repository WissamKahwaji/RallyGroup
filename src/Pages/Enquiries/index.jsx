import React from "react";
import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import { baseURL } from "../../API/BaseURL";
import Container from "../../Components/UI/Container";
import useSelectDataDependOnLang from "../../Hooks/useSelectDataDependOnLang";
import secondFont from "../../SharedCSS/secondFont.module.css";
import EnquiriesForm from "../../Components/EnqueriesForm";
import EnquiriesBookingForm from "../../Components/EnquiriesBookingForm";

const Enquiries = () => {
  const data = useLoaderData();
  const { handleSelectDataDependOnLang } = useSelectDataDependOnLang();
  const colorsData = useSelector((state) => state.colorsSlice);
  const headingTitleStyle = {
    background: `${colorsData.data.linear}`,
    WebkitTextFillColor: "transparent", // Use WebkitTextFillColor instead of -webkit-text-fill-color
    WebkitBackgroundClip: "text", // Use WebkitBackgroundClip instead of -webkit-background-clip
  };
  return (
    <Container className={"mt-12"}>
      <div className="flex flex-col items-center justify-center gap-8   py-16 md:py-32">
        <p
          style={headingTitleStyle}
          className={`text-center ${secondFont["second-font"]} text-7xl`}
        >
          {handleSelectDataDependOnLang(data.data, "title")}
        </p>
        <p>{handleSelectDataDependOnLang(data.data, "subTitle")}</p>
      </div>
      <div
        style={{
          background: `url(${data.data.img}), #fff`,
          backgroundSize: "cover  ",
        }}
        className=" bg-cover px-3 py-10  bg-blend-luminosity md:px-32 md:py-20"
      >
        <div className="grid grid-cols-1 items-start justify-evenly gap-16  bg-black/50 px-4 py-2 shadow-md backdrop-blur-sm md:grid-cols-2 md:gap-32 md:px-12 md:py-8">
          <EnquiriesForm />
          <EnquiriesBookingForm />
        </div>
      </div>
    </Container>
  );
};
export const enquiriesLoader = async () => {
  const res = await fetch(`${baseURL}/enquiry`);
  const data = await res.json();
  return data;
};
export default Enquiries;
