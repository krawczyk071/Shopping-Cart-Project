import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Products from "./components/Products";
import Hero from "./components/Hero";
import Cart from "./components/Cart";

function App() {
  // const emptyCart = { item: { id, qty, subtotal }, total };
  const [cart, setCart] = React.useState([]);

  const addCart = (productId) => {
    setCart((prev) => {
      const myItem = prev.find((item) => item.id === productId);
      if (myItem) {
        return prev.map((product) =>
          product.id === productId
            ? { ...product, qty: product.qty + 1 }
            : product
        );
      } else {
        return [...prev, { id: productId, qty: 1 }];
      }
    });
  };
  const subsCart = (productId) => {
    setCart((prev) => {
      const myItem = prev.find((item) => item.id === productId);
      if (myItem.qty > 1) {
        return prev.map((product) =>
          product.id === productId
            ? { ...product, qty: product.qty - 1 }
            : product
        );
      } else {
        return prev.filter((item) => item.id !== productId);
      }
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout data={cart} />}>
          <Route index element={<Hero />} />
          <Route path="/products" element={<Products addCart={addCart} />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} actions={{ addCart, subsCart }} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// https://michalosman.github.io/shopping-cart/products
// https://pklepa.github.io/shopping-cart/#/
