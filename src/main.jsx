import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { ShopContextProvider } from "./context/ShopContext.jsx";
import "react-loading-skeleton/dist/skeleton.css";
import {  CartProvider } from "./context/CartContext.jsx";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      {/* <ShopContextProvider> */}
        <QueryClientProvider client={queryClient}>
          <CartProvider>
          <App />
          </CartProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <ToastContainer />
        </QueryClientProvider>
      {/* </ShopContextProvider> */}
    </AuthContextProvider>
  </React.StrictMode>
);
