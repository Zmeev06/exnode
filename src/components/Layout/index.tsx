import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Container from "../UI/Container";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};
export default Layout;
