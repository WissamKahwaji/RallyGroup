import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root, { rootLoader } from "./Pages/Root";
import { baseURL } from "./API/BaseURL";
import useApiFetch from "./Hooks/useApiFetch";
import { colorsActions } from "./Store/colorsSlice";
import { homeActions } from "./Store/homeSlice";
import { servicesActions } from "./Store/servicesSlice";
import { carsLoader } from "./Pages/Cars/Cars";
import { contactActions } from "./Store/contactSlice";
import { servicesLoader } from "./Pages/Services/Services";
import { carActions } from "./Store/carSlice";
import { ratesLoader } from "./Pages/Rates/Rates";
import { ourClientsActions } from "./Store/ourClientsSlice";
import { aboutLoader } from "./Pages/About/About";
import { enquiriesLoader } from "./Pages/Enquiries";
import LoadingPage from "./Pages/LoadingPage/LoadingPage";
import { enquiresFormAction } from "./Components/EnqueriesForm";
const Home = lazy(() => import("./Pages/Home/Home"));
const Services = lazy(() => import("./Pages/Services/Services"));
const Rates = lazy(() => import("./Pages/Rates/Rates"));
const Cars = lazy(() => import("./Pages/Cars/Cars"));
const CategoryOne = lazy(() => import("./Pages/Cars/CategoryOne/CategoryOne"));

const CategoryTwo = lazy(() => import("./Pages/Cars/CategoryTwo/CategoryTwo"));
const CategoryThree = lazy(
  () => import("./Pages/Cars/CategoryThree/CategoryThree"),
);
const About = lazy(() => import("./Pages/About/About"));
const Enquiries = lazy(() => import("./Pages/Enquiries"));

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
          element: <Rates />,
          loader: ratesLoader,
        },
        {
          path: "/cars",
          element: <Cars />,
          id: "carsRoute",
          loader: carsLoader,
          children: [
            {
              index: true,
              element: <CategoryTwo />,
            },
            {
              path: "categoryOne",
              element: <CategoryOne />,
            },
            {
              path: "categoryThree",
              element: <CategoryThree />,
            },
          ],
        },
        {
          path: "/about",
          element: <About />,
          loader: aboutLoader,
        },
        {
          path: "/enquiries",
          element: <Enquiries />,
          loader: enquiriesLoader,
          action: enquiresFormAction,
        },
      ],
    },
  ]);
  const { dataColors, errorColors, isLoadingColors } = useApiFetch(
    `${baseURL}/colors`,
    colorsActions.storeColors,
  );
  const { dataHome, errorHome, isLoadingHome } = useApiFetch(
    `${baseURL}/home`,
    homeActions.storeHome,
  );
  const { dataServices, errorServices, isLoadingServices } = useApiFetch(
    `${baseURL}/services`,
    servicesActions.storeServices,
  );
  const { dataContact, errorContact, isLoadingContact } = useApiFetch(
    `${baseURL}/contact`,
    contactActions.storeContact,
  );
  const { dataCar, errorCar, isLoadingCar } = useApiFetch(
    `${baseURL}/carPage`,
    carActions.storeCar,
  );
  const { dataOurClients, errorOurClients, isLoadingOurClients } = useApiFetch(
    `${baseURL}/ourClients`,
    ourClientsActions.storeOurClients,
  );

  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />;
    </Suspense>
  );
};

export default App;
