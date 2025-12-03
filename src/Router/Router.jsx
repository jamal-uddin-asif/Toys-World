import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import ToyDetails from "../Pages/ToyDetails";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LoadingSpinner from "../Pages/LoadingSpinner";

import ErrorPage from "../Pages/ErrorPage";
import ForgetPassPage from "../Pages/ForgetPassPage";
import Discount from "../Pages/Discount";
import Profile from "../Layouts/Profile";
import UpdateProfile from "../Components/UpdateProfile";
import AccountDetails from "../Components/AccountDetails";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import AllToysPage from "../Pages/AllToysPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/toys.json"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path:'toys',
        Component: AllToysPage,
        loader: () => fetch("/alltoys.json"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "toy/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        // Component: ToyDetails,
        loader: () => fetch("/toys.json"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "signin",
        Component: Login,
      },
      {
        path: "registration",
        Component: Registration,
      },
      {
        path: 'about_us',
        Component: AboutUs
      },
      {
        path: 'contact_us',
        Component: ContactUs
      },
      {
        path: "forgetPassword",
        Component: ForgetPassPage,
      },
      {
        path: "discount",
        Component: Discount,
        loader: () => fetch("/toys.json"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
    ],
  },
  {
    path: "profile",
    element: (
      <PrivateRoute>
        <Profile></Profile>
      </PrivateRoute>
    ),
    children:[
      {
        index: true,
        Component: AccountDetails

      }
      ,
      {
        path: '/profile/update_profile',
        Component: UpdateProfile
      }
    ]
  },

  {
    path: "/*",
    Component: ErrorPage,
  },
]);
