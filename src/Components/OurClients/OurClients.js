import React from "react";
import { useSelector } from "react-redux";
import CarouselComponent from "../UI/CarouselComponent";
import Container from "../UI/Container";
import PageHeadingTitle from "../UI/PageHeadingTitle";
import { useTranslation } from "react-i18next";

const OurClients = () => {
  const { t } = useTranslation();
  const ourClientsData = useSelector((state) => state.ourClientsSlice);
  console.log(ourClientsData);
  const items = ourClientsData.data.map((ele) => (
    <div
      className={`mx-4 flex h-[100px] flex-col items-center justify-between`}
    >
      <img
        src={ele.img}
        alt={ele.title}
        className={`h-full w-full flex-1 object-contain md:h-1/2`}
      />
      <h3 className={`mt-4 hidden text-sm font-semibold md:block`}>
        {ele.title}
      </h3>
    </div>
  ));
  return (
    <Container className={`my-4`}>
      <PageHeadingTitle
        title={t("pages.home.ourClients.sectionHead.title")}
        desc={t("pages.home.ourClients.sectionHead.desc")}
      />
      <CarouselComponent items={items} mobileViewItems={2} />
    </Container>
  );
};

export default OurClients;
