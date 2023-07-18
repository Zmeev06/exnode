import React, { useEffect, useState } from "react";
import { getOrderInfo } from "../../services/paymentService";
import { IOrderInfo, IProfile } from "../../interfaces/serviceInterfaces";
import styles from "./index.module.scss";
import InfoBlock from "../../components/PaymentComponents/InfoBLock";
import Steps from "../../components/PaymentComponents/Steps";
import PayBlock from "../../components/PaymentComponents/PayBlock";
import Chat from "../../components/PaymentComponents/Chat";
import { getProfile } from "../../services/profileServices";
import Container from "../../components/UI/Container";

const PaymentPage = () => {
  const [orderInfo, setOrderInfo] = useState<IOrderInfo | null>();
  const [userInfo, setUserInfo] = useState<IProfile | null>();
  const token = localStorage.getItem("token") || "";
  console.log(token);
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

  return (
    <Container>
      <div className={styles.main}>
        <div className={styles.leftBlock}>
          <InfoBlock time={currentTime} />
          <Steps />
          <PayBlock
            sum={orderInfo?.data.sum || "0"}
            paymentMethod={orderInfo?.data.payment_method || 0}
            requisites={orderInfo?.data.requisites || ""}
            price={orderInfo?.data.price || "0"}
          />
        </div>
        <div className={styles.rightBlock}>
          <Chat myName={userInfo?.data.login || ""} />
        </div>
      </div>
    </Container>
  );
};
export default PaymentPage;
