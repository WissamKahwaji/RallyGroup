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
    <div className={`flex flex-col h-screen`}>
      <PageHeadingTitle title="Booking" desc="Book Your Car Now!" />
      <div className={`flex flex-col md:grid md:grid-cols-2 gap-x-2 flex-1`}>
        <div className={`relative w-full h-full`}>
          <img
            src={homeData.data.landingImg}
            alt={homeData.data.brandName}
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg`}
          />
          <span
            className={`absolute w-full h-full bg-black bg-opacity-50`}
          ></span>
          <div
            className={`flex flex-col items-center justify-center z-10 w-full h-full p-2 absolute top-0 left-0`}
          >
            <h3
              style={bookingTitleStyle}
              className={`text-xl md:text-3xl font-semibold ${secondFont["second-font"]} mb-1 md:mb-4`}
            >
              Easy Car Rental Booking
            </h3>
            <p
              className={`text-sm md:text-lg text-center ${thirdFont["third-font"]}`}
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
            className={`grid grid-cols-2 gap-5 p-4 rounded-lg md:m-0 md:mr-2 m-2 mt-5 h-full shadow-[0px_0px_10px_1px_#D9A82E]`}
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
            <button style={submitStyle} className={`p-1 rounded-md`}>
              Submit
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
