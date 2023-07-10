import React from "react";
import BackgroundBlock from "../../components/BackgroundBlock";
import OffersBlock from "../../components/OffersComponents/OffersBlock";
import P2PInfo from "../../components/P2PInfo";
import Employees from "../../components/Employees";
import Trade from "../../components/Trade";
import TGBot from "../../components/TGBot";
import FAQs from "../../components/FAQs";

const MainPage = () => {
  return (
    <div>
      <BackgroundBlock />
      <OffersBlock />
      <P2PInfo />
      <Employees />
      <Trade />
      <TGBot />
      <FAQs />
    </div>
  );
};
export default MainPage;
