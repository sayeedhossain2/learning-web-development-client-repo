import { createBrowserRouter } from "react-router-dom";
import Home from "../../Component/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <main></main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
