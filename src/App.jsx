import "./App.css";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(event, product, quantity) {
    event.preventDefault();
    quantity = Number(quantity);
    setCart((cart) => {
      const existingProductIndex = cart.findIndex(
        (currentProduct) => currentProduct.id === product.id
      );

      const updatedCart = [...cart];

      if (existingProductIndex > -1) {
        const existingProduct = updatedCart[existingProductIndex];
        updatedCart[existingProductIndex] = {
          ...existingProduct,
          quantity: quantity,
        };
      } else {
        updatedCart.push({ ...product, quantity: quantity });
      }
      return updatedCart;
    });
  }
  console.log(cart);

  const router = createBrowserRouter([
    {
      path: "/home",
      element: (
        <Layout cart={cart}>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/checkout",
      element: (
        <Layout cart={cart}>
          <Checkout />
        </Layout>
      ),
    },
    {
      path: "shop",
      element: (
        <Layout cart={cart}>
          <Shop cart={cart} addToCart={addToCart}/>
        </Layout>
      ),
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
