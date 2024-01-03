import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Layout from "./components/Layout/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/checkout",
    element: <Layout><Checkout /></Layout>,
  },
  {
    path: 'shop',
    element: <Layout><Shop /></Layout>,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
