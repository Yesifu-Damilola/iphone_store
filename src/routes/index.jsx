import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/home/Root";
import Home from "../pages/home";
import SignUp from "../pages/home/signup/SignUp";
import Login from "../pages/home/login/Login";

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
    ],
  },
]);
