import React from "react";
import styles from "./index.module.scss";
import Container from "../UI/Container";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const Layout = ({}) => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};
export default Layout;
