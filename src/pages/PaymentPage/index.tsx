import React, { useEffect, useState } from "react";
import { getOrderInfo } from "../../services/paymentService";
import { IOrderInfo, IProfile } from "../../interfaces/serviceInterfaces";
import styles from "./index.module.scss";
import InfoBlock from "../../components/PaymentComponents/InfoBLock";
import Steps from "../../components/PaymentComponents/Steps";
import PayBlockFirstStage from "../../components/PaymentComponents/PayBlockFirstStage";
import Chat from "../../components/PaymentComponents/Chat";
import { getProfile } from "../../services/profileServices";
import Container from "../../components/UI/Container";
import PayBlockSecondStageSeller from "../../components/PaymentComponents/PayBlockSecondStageSeller";

const PaymentPage = () => {
  const [orderInfo, setOrderInfo] = useState<IOrderInfo | null>();
  const [userInfo, setUserInfo] = useState<IProfile | null>();
  const token = localStorage.getItem("token") || "";
  const [steps, setSteps] = useState(1);
  
  const getOrderInformation = async () => {
    const { data } = await getOrderInfo(token.replace(/"/g, ""), 1);
    setOrderInfo(data);
  };

  const getUserName = async () => {
    const { data } = await getProfile(token);
    setUserInfo(data);
  };

  const time = new Date(orderInfo?.data.created_at || "");
  const currentTime = `${time.getDate()}.${time.getMonth()}.${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

  useEffect(() => {
    getOrderInformation();
    getUserName();
  }, []);
  const [[m, s], setTime] = useState([15, 0]);
  const [over, setOver] = useState(false);
  const tick = () => {
    if (m === 0 && s === 0) {
      setOver(true);
    } else if (s === 0) {
      setTime([m - 1, 59]);
    } else {
      setTime([m, s - 1]);
    }
  };

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  });

  
  return (
    <Container>
      <div className={styles.main}>
        <div className={styles.leftBlock}>
          <InfoBlock time={currentTime} m={m} s={s}/>
          <Steps step={steps} />
          <PayBlockFirstStage
            sum={orderInfo?.data.sum || "0"}
            paymentMethod={orderInfo?.data.payment_method || 0}
            requisites={orderInfo?.data.requisites || ""}
            price={orderInfo?.data.price || "0"}
            setStep={setSteps}
            step={steps}
            m={m}
            s={s}
          />
          {/*      <PayBlockSecondStageSeller /> */}
        </div>
        <div className={styles.rightBlock}>
          <Chat myName={userInfo?.data.login || ""} />
        </div>
      </div>
    </Container>
  );
};
export default PaymentPage;
