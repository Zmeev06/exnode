import React from "react";
import styles from "./index.module.scss";
import Container from "../UI/Container";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default Layout;
