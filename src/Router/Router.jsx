import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import ToyDetails from "../Pages/ToyDetails";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LoadingSpinner from "../Pages/LoadingSpinner";
import Profile from "../Pages/Profile";
import ErrorPage from "../Pages/ErrorPage";
import ForgetPassPage from "../Pages/ForgetPassPage";
import Discount from "../Pages/Discount";

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
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: 'forgetPassword',
        Component: ForgetPassPage
      },
      {
        path: 'discount',
        element: <PrivateRoute>
          <Discount></Discount>
        </PrivateRoute>,
         loader: () => fetch("/toys.json"),
          hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      }
    ],

    
  },

  {
    path: '/*',
    Component: ErrorPage
  }
]);
