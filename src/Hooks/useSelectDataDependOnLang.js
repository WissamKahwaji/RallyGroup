import { useTranslation } from "react-i18next";

const useSelectDataDependOnLang = () => {
  const { i18n, t } = useTranslation();

  return {
    handleSelectDataDependOnLang: (object, field) =>
      i18n.language === "en" ? object[field] : object[`${field}Ar`],
    t,
  };
};

export default useSelectDataDependOnLang;
