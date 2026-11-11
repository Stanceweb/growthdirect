import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./User/Context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <BrowserRouter>
      <StrictMode>
        <ScrollToTop />
        <App />
      </StrictMode>
    </BrowserRouter>
  </CartProvider>,
);
