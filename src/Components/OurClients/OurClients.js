import React from "react";
import { useSelector } from "react-redux";
import CarouselComponent from "../UI/CarouselComponent";
import Container from "../UI/Container";
import PageHeadingTitle from "../UI/PageHeadingTitle";

const OurClients = () => {
  const ourClientsData = useSelector((state) => state.ourClientsSlice);
  console.log(ourClientsData);
  const items = ourClientsData.data.map((ele) => (
    <div
      className={`flex items-center flex-col justify-between h-[100px] mx-4`}
    >
      <img
        src={ele.img}
        alt={ele.title}
        className={`w-full h-full md:h-1/2 object-contain flex-1`}
      />
      <h3 className={`text-sm font-semibold mt-4 md:block hidden`}>
        {ele.title}
      </h3>
    </div>
  ));
  return (
    <Container className={`my-4`}>
      <PageHeadingTitle title="Our Clients" desc="Our Trusted Clients" />
      <CarouselComponent items={items} mobileViewItems={2} />
    </Container>
  );
};

export default OurClients;
