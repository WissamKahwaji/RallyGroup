import React from "react";
import { useTranslation } from "react-i18next";
import { handleDecideDocumentDirection } from "../../utils";
import { useSelector } from "react-redux";
const SelectLang = () => {
  const { t, i18n } = useTranslation();
  const colors = useSelector((state) => state.colorsSlice);
  const optionStyle = {
    color: colors?.data?.mainColor,
  };
  const selectStyle = {
    border: `1px solid ${colors?.data?.mainColor}`,
  };
  const handleChangeLanguage = (e) => {
    const selectedLang = e.target.value;
    document.documentElement.lang = selectedLang;
    document.documentElement.dir = handleDecideDocumentDirection(selectedLang);
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("lang", selectedLang);
    localStorage.setItem("dir", handleDecideDocumentDirection(selectedLang));
  };
  return (
    <div>
      <select
        style={selectStyle}
        className=" rounded-xl bg-transparent px-1 py-1  outline-none sm:px-2 sm:text-xl md:rounded-2xl md:px-4 md:text-2xl"
        value={i18n.language}
        onChange={handleChangeLanguage}
      >
        <option style={optionStyle} value={"en"}>
          {t("languages.en")}
        </option>
        <option style={optionStyle} value={"ar"}>
          {t("languages.ar")}
        </option>
      </select>
    </div>
  );
};

export default SelectLang;
