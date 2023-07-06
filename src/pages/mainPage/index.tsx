import React from "react";
import styles from "./index.module.scss";
import BackgroundBlock from "../../components/BackgroundBlock";
import OffersBlock from "../../components/OffersComponents/OffersBlock";
import P2PInfo from "../../components/P2PInfo";
import AuthorizationBlock from "../../components/AuthorizationComponents/AuthorizationBlock";

const MainPage = () => {
  return (
    <div>
      <AuthorizationBlock />
      <BackgroundBlock />
      <OffersBlock />
      <P2PInfo />
    </div>
  );
};
export default MainPage;
