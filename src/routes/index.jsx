import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/home/Root";
import Home from "./../pages/home/index";
import SignUp from "./../pages/signup/SignUp";
import Login from "./../pages/login/Login";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import MyAccount from "../pages/myaccount/MyAccount";
import Cart from "../pages/cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "myaccount",
        element: <MyAccount />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
