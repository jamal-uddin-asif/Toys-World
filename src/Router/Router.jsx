import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import ToyDetails from "../Pages/ToyDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component: Home,
            loader: ()=> fetch('/toys.json')
        },
        {
            path: 'toy/:id',
            Component: ToyDetails,
            loader: ()=> fetch('/toys.json')
        }
    ],
  },
]);
