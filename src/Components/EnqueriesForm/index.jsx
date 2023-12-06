import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Form, redirect } from "react-router-dom";
import Input from "../UI/Input";
import TextArea from "../UI/TextArea";
import axios from "axios";
import { baseURL } from "../../API/BaseURL";
const EnquiriesForm = () => {
  const { t } = useTranslation();
  const colorsData = useSelector((state) => state.colorsSlice);
  const submitStyle = {
    backgroundColor: colorsData.data.mainColor,
  };
  return (
    <div>
      <Form method="post">
        <div className={` grid grid-cols-1 gap-5 `}>
          <Input
            input={{
              title: t("pages.enquiries.form.fullName"),
              type: "text",
              name: "name",
            }}
          />
          <Input
            input={{
              title: t("pages.enquiries.form.email"),
              type: "email",
              name: "email",
            }}
          />
          <TextArea
            label={t("pages.enquiries.form.message")}
            input={{
              type: "text",
              name: "message",
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
export const enquiresFormAction = async ({ request }) => {
  const formData = await request.formData();
  await axios.post(`${baseURL}/enquiry/form`, formData);
  return redirect("/");
};
export default EnquiriesForm;
