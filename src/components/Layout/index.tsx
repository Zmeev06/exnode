import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Container from "../UI/Container";
import Footer from "../Footer";
import HeaderSidebar from "../HeaderSidebar";

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        <HeaderSidebar />
      </Container>
      {/* <Outlet />
      <Container>
        <Footer />
      </Container> */}
    </>
  );
};
export default Layout;
