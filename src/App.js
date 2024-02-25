import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import ErrorComponent from "./components/Error";
import ContactComponent from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import ShimmerComponent from "./components/Shimmer";
const AppLayout = () => (
  <div className="app">
    <HeaderComponent />
    <Outlet></Outlet>
  </div>
);
const AboutComponent = lazy(() => import("./components/About"));
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
        element: (
          <Suspense fallback={<ShimmerComponent></ShimmerComponent>}>
            <AboutComponent />
          </Suspense>
        ),
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
