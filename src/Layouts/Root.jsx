import React from "react";
import Navber from "../Components/Navber";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <header>
        <Navber></Navber>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>

      </footer>
    </div>
  );
};

export default Root;
