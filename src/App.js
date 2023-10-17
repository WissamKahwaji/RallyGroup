import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root, { rootLoader } from "./Pages/Root";
import { baseURL } from "./API/BaseURL";
import useApiFetch from "./Hooks/useApiFetch";
import { colorsActions } from "./Store/colorsSlice";
import { homeActions } from "./Store/homeSlice";
import Home from "./Pages/Home/Home";
import { servicesActions } from "./Store/servicesSlice";
import Cars, { carsLoader } from "./Pages/Cars/Cars";
import { contactActions } from "./Store/contactSlice";
import Services, { servicesLoader } from "./Pages/Services/Services";
// import Rates, { ratesLoader } from "./Pages/Rates/Rates";
import { carActions } from "./Store/carSlice";
import Offers from "./Pages/Offers/Offers";
import { ourClientsActions } from "./Store/ourClientsSlice";
import CategoryOne from "./Pages/Cars/CategoryOne/CategoryOne";
import CategoryTwo from "./Pages/Cars/CategoryTwo/CategoryTwo";
import About, { aboutLoader } from "./Pages/About/About";
import LoadingPage from "./Pages/LoadingPage/LoadingPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: rootLoader,
      errorElement: <LoadingPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/services",
          element: <Services />,
          loader: servicesLoader,
        },
        {
          path: "/rates",
          element: <Offers />,
          // loader: ratesLoader,
        },
        {
          path: "/cars",
          element: <Cars />,
          id: "carsRoute",
          loader: carsLoader,
          children: [
            {
              index: true,
              element: <CategoryOne />,
            },
            {
              path: "categoryTwo",
              element: <CategoryTwo />,
            },
          ],
        },
        {
          path: "/about",
          element: <About />,
          loader: aboutLoader,
        },
      ],
    },
  ]);
  const { dataColors, errorColors, isLoadingColors } = useApiFetch(
    `${baseURL}/colors`,
    colorsActions.storeColors
  );
  const { dataHome, errorHome, isLoadingHome } = useApiFetch(
    `${baseURL}/home`,
    homeActions.storeHome
  );
  const { dataServices, errorServices, isLoadingServices } = useApiFetch(
    `${baseURL}/services`,
    servicesActions.storeServices
  );
  const { dataContact, errorContact, isLoadingContact } = useApiFetch(
    `${baseURL}/contact`,
    contactActions.storeContact
  );
  const { dataCar, errorCar, isLoadingCar } = useApiFetch(
    `${baseURL}/carPage`,
    carActions.storeCar
  );
  const { dataOurClients, errorOurClients, isLoadingOurClients } = useApiFetch(
    `${baseURL}/ourClients`,
    ourClientsActions.storeOurClients
  );

  return <RouterProvider router={router} />;
};

export default App;
