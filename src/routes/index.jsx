import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/home/Root";
import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
    ],
  },
]);
