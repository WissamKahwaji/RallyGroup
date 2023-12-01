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
const Booking = () => {
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
    border: `1px solid ${colorsData.data.mainColor}`,
  };
  const bookingTitleStyle = {
    color: colorsData.data.mainColor,
  };
  return (
    <div id="bookNow" className={`md:flex md:h-screen md:flex-col`}>
      <PageHeadingTitle title="Booking" desc="Book Your Car Now!" />
      <div className={`flex flex-1 flex-col gap-x-5 md:grid md:grid-cols-3`}>
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
              className={`text-xl font-semibold md:text-3xl ${secondFont["second-font"]} mb-1 md:mb-4`}
            >
              Easy Car Rental Booking
            </h3>
            <p
              className={`text-center text-sm md:text-lg ${thirdFont["third-font"]}`}
            >
              Discover seamless car rental at your fingertips! With our
              user-friendly booking system, you can reserve standard cars or
              luxurious limousines in just a few clicks. Choose your vehicle,
              select dates, and book with confidence. Your next adventure begins
              here.
            </p>
          </div>
        </div>
        <div>
          <Form
            method="post"
            className={`m-2 mt-5 grid h-full grid-cols-1 gap-5 rounded-lg p-4 shadow-[0px_0px_5px_1px_#D9A82E] md:m-0 md:mr-5`}
          >
            <Input
              input={{
                title: "Enter The Pick Up Location",
                type: "text",
              }}
            />
            <Input
              input={{
                title: "Enter The Drop Off Location",
                type: "text",
              }}
            />
            <DateTimePicker reason="Pick Up" />
            <DateTimePicker reason="Return" />

            {/* <Input/> */}
            <Input
              input={{
                title: "Enter Your Name",
                type: "text",
              }}
            />
            <Input
              input={{
                title: "Enter Your Mail ID",
                type: "text",
              }}
            />
            <button style={submitStyle} className={`rounded-md p-1`}>
              Submit
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
