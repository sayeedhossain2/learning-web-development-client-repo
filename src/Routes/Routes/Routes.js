import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Component/Blog/Blog";
import ErrorPage from "../../Component/ErrorPage/ErrorPage";
import Faq from "../../Component/Faq/Faq";
import Home from "../../Component/Home/Home";
import Login from "../../Component/Login/Login";
import Register from "../../Component/Register/Register";
import AllCourseDetails from "../../Courses/AllCourse/AllCourseDetails/AllCourseDetails";
import PremiumCourse from "../../Courses/AllCourse/PremiumCourse/PremiumCourse";
import Courses from "../../Courses/Courses/Courses";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },

      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/categories/:id",
        element: <AllCourseDetails></AllCourseDetails>,
        loader: ({ params }) =>
          fetch(
            `https://web-development-server.vercel.app/categories/${params.id}`
          ),
      },
      {
        path: "/book/:id",
        element: (
          <PrivateRoute>
            <PremiumCourse></PremiumCourse>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://web-development-server.vercel.app/book/${params.id}`),
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "*",
        element: (
          <div className=" font-bold text-3xl  text-red-600">
            This page is not found 404
          </div>
        ),
      },
    ],
  },
]);
