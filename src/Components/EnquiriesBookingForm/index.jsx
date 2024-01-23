import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Form } from "react-router-dom";
import Input from "../UI/Input";
import DateTimePicker from "../UI/DateTimePicker";
import { baseURL } from "../../API/BaseURL";

const EnquiriesBookingForm = () => {
  const { t } = useTranslation();
  const colorsData = useSelector((state) => state.colorsSlice);
  const submitStyle = {
    backgroundColor: colorsData.data.mainColor,
  };
  const [formValues, setFormValues] = useState({
    from: "",
    to: "",
    pickUpDate: new Date(),
    dropOffDate: new Date(),
    fullName: "",
    email: "",
    mobile: "",
    reservationDate: new Date(),
  });

  const [selectedDuration, setSelectedDuration] = useState("1"); 
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${baseURL}/bookings/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        alert("Your Booking sent successfully!");
      } else {
        console.error("Failed to send email");
        alert("Failed to send request. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle unexpected errors, e.g., show a generic error message to the user
    }
  };

  const handleDateTimePickerChange = (name, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div>
          <Form
            method="post"
            className={` h-full  rounded-lg  `}
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-5">
              <Input
                input={{
                  title: t("pages.home.rentCarBooking.form.pickUp.location"),
                  type: "text",
                  name: "from",
                  
                  value: formValues.from,
                  onChange: (e) =>
                    setFormValues({ ...formValues, from: e.target.value }),
                }}
              />
              <Input
                input={{
                  title: t("pages.home.rentCarBooking.form.dropOff.location"),
                  type: "text",
                  name: "to",
                  value: formValues.to,
                  onChange: (e) =>
                    setFormValues({ ...formValues, to: e.target.value }),
                }}
              />
              <DateTimePicker
                label={t("pages.home.rentCarBooking.form.pickUp.date")}
                name="pickUpDate"
                value={formValues.pickUpDate}
                onDateTimeChange={(name, value) =>
                  handleDateTimePickerChange(name, value)
                }
              />
              <DateTimePicker
                label={t("pages.home.rentCarBooking.form.dropOff.date")}
                name="dropOffDate"
                value={formValues.dropOffDate}
                onDateTimeChange={(name, value) =>
                  handleDateTimePickerChange(name, value)
                }
              />
              <Input
                input={{
                  title: t("pages.home.rentCarBooking.form.name"),
                  type: "text",
                  name: "fullName",
                  value: formValues.fullName,
                  onChange: (e) =>
                    setFormValues({ ...formValues, fullName: e.target.value }),
                }}
              />
              <Input
                input={{
                  title: t("pages.home.rentCarBooking.form.email"),
                  type: "text",
                  name: "email",
                  value: formValues.email,
                  onChange: (e) =>
                    setFormValues({ ...formValues, email: e.target.value }),
                }}
              />
              <Input
                input={{
                  title: t("pages.home.rentCarBooking.form.mobile_number"),
                  type: "text",
                  name: "mobile",
                  value: formValues.mobile,
                  onChange: (e) =>
                    setFormValues({ ...formValues, mobile: e.target.value }),
                }}
              />
            </div>
            <button
              style={submitStyle}
              className={"mt-4 rounded-md  px-3 py-1"}
              type="submit"
            >
              {t("pages.home.rentCarBooking.form.submit")}
            </button>
          </Form>
    </div>
  );
};

export default EnquiriesBookingForm;
