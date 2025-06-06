import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <div><Outlet /></div>
      <Footer />
    </>
  );
}

export default Layout;