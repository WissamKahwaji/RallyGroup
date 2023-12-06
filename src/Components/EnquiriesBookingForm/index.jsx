import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Form } from "react-router-dom";
import Input from "../UI/Input";
import DateTimePicker from "../UI/DateTimePicker";

const EnquiriesBookingForm = () => {
  const { t } = useTranslation();
  const colorsData = useSelector((state) => state.colorsSlice);
  const submitStyle = {
    backgroundColor: colorsData.data.mainColor,
  };
  return (
    <div>
      <Form method="post">
        <div className={` grid  grid-cols-1 gap-5`}>
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
        <button style={submitStyle} className={`mt-4 rounded-md  px-3 py-1`}>
          {t("pages.home.rentCarBooking.form.submit")}
        </button>
      </Form>
    </div>
  );
};

export default EnquiriesBookingForm;
