import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import ErrorComponent from "./components/Error";
import AboutComponent from "./components/About";
import ContactComponent from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
const AppLayout = () => (
  <div className="app">
    <HeaderComponent />
    <Outlet></Outlet>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("react-root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <AboutComponent />,
      },
      {
        path: "/contact",
        element: <ContactComponent />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);
root.render(<RouterProvider router={appRouter}></RouterProvider>);
// root.render(<AppLayout />);
