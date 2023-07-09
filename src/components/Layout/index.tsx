import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Container from "../UI/Container";
import Footer from "../Footer";
import HeaderSidebar from "../HeaderSidebar";
import styles from "./index.module.scss";

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        
      </Container>
      <HeaderSidebar />
      <div className={styles.content}>
        <Outlet />

        {/* <Container>
        <Footer />
      </Container> */}
      </div>
    </>
  );
};
export default Layout;
