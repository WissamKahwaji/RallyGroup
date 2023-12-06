import React, { useState } from "react";
import Container from "../UI/Container";
import { Form } from "react-router-dom";
import Input from "../UI/Input";
import DatePickerMin from "../UI/DatePickerMin";
import DateTimePicker from "../UI/DateTimePicker";
import PageHeadingTitle from "../UI/PageHeadingTitle";
import { useSelector } from "react-redux";
import secondFont from "../../SharedCSS/secondFont.module.css";
import thirdFont from "../../SharedCSS/thirdFont.module.css";
import { useTranslation } from "react-i18next";
const Booking = () => {
  const { t } = useTranslation();
  const [selectedDuration, setSelectedDuration] = useState("1"); // Default duration value (1 day)
  const colorsData = useSelector((state) => state.colorsSlice);

  const handleDurationChange = (e) => {
    const duration = e.target.value;
    setSelectedDuration(duration);
  };
  const homeData = useSelector((state) => state.homeSlice);
  const heavyLineStyle = {
    background: colorsData.data.linear,
  };
  console.log(heavyLineStyle);
  const submitStyle = {
    background: colorsData.data.mainColor,
  };
  const bookingTitleStyle = {
    color: colorsData.data.mainColor,
  };
  return (
    <div id="bookNow" className={`md:flex md:h-screen md:flex-col`}>
      <PageHeadingTitle
        title={t("pages.home.rentCarBooking.sectionHead.title")}
        desc={t("pages.home.rentCarBooking.sectionHead.desc")}
      />
      <div
        className={`mx-1 flex flex-1 flex-col gap-x-5 md:grid md:grid-cols-3`}
      >
        <div className={`relative col-span-2 flex h-full w-full flex-col`}>
          <img
            src={homeData.data.landingImg}
            alt={homeData.data.brandName}
            className={`relative left-0 top-0 h-full w-full rounded-lg object-cover`}
          />
          <span
            className={`absolute h-full w-full bg-black bg-opacity-50`}
          ></span>
          <div
            className={`absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center p-2`}
          >
            <h3
              style={bookingTitleStyle}
              className={`text-xl font-semibold capitalize md:text-3xl ${secondFont["second-font"]} mb-1 md:mb-4`}
            >
              {t("pages.home.rentCarBooking.title")}
            </h3>
            <p
              className={`text-center text-sm first-letter:capitalize md:text-lg ${thirdFont["third-font"]}`}
            >
              {t("pages.home.rentCarBooking.desc")}
            </p>
          </div>
        </div>
        <div>
          <Form
            method="post"
            className={`m-2 mt-5  h-full  rounded-lg p-4  md:m-0 md:mr-5`}
          >
            <div className="grid grid-cols-1 gap-5">
              <Input
                input={{
                  title: t("pages.home.rentCarBooking.form.pickUp.location"),
                  type: "text",
                }}
              />
              <Input
                input={{
                  title: t("pages.home.rentCarBooking.form.dropOff.location"),
                  type: "text",
                }}
              />
              <DateTimePicker
                label={t("pages.home.rentCarBooking.form.pickUp.date")}
              />
              <DateTimePicker
                label={t("pages.home.rentCarBooking.form.dropOff.date")}
              />

              {/* <Input/> */}
              <Input
                input={{
                  title: t("pages.home.rentCarBooking.form.name"),
                  type: "text",
                }}
              />
              <Input
                input={{
                  title: t("pages.home.rentCarBooking.form.email"),
                  type: "text",
                }}
              />
            </div>
            <button
              style={submitStyle}
              className={"mt-4 rounded-md  px-3 py-1"}
            >
              {t("pages.home.rentCarBooking.form.submit")}
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
