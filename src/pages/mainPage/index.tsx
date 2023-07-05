import React from "react";
import styles from "./index.module.scss";
import BackgroundBlock from "../../components/BackgroundBlock";
import OffersBlock from "../../components/OffersComponents/OffersBlock";
import P2PInfo from "../../components/P2PInfo";
import Employees from "../../components/Employees";

const MainPage = () => {
  return (
    <div>
      <BackgroundBlock />
      <OffersBlock />
      <P2PInfo />
      <Employees />
    </div>
  );
};
export default MainPage;
