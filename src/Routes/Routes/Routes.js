import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Component/Blog/Blog";
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
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
      {
        path: "/book/:id",
        element: (
          <PrivateRoute>
            <PremiumCourse></PremiumCourse>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
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
        element: <div>this route is not found 404</div>,
      },
    ],
  },
]);
