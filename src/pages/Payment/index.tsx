import React, { useEffect, useState } from "react";
import InfoBlock from "../../components/PaymentComponents/InfoBLock";
import styles from "./index.module.scss";
import Steps from "../../components/PaymentComponents/Steps";
import PayBlock from "../../components/PaymentComponents/PayBlock";
import Chat from "../../components/PaymentComponents/Chat";
import { getOrderInfo } from "../../services/paymentService";
import { IOrderInfo } from "../../interfaces/serviceInterfaces";

const Payment = () => {
  const [orderInfo, setOrderInfo] = useState<IOrderInfo | null>();
  const token = localStorage.getItem("token") || "";
  const getOrderInformation = async () => {
    const { data } = await getOrderInfo(token.replace(/"/g, ""), 1);
    setOrderInfo(data);
    console.log(data)
  };

  const time = new Date(orderInfo?.data.created_at || "");
  const currentTime = `${time.getDate()}.${time.getMonth()}.${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

  useEffect(() => {
    getOrderInformation()
  }, [])

  return (
    <div className={styles.main}>
      <div className={styles.leftBlock}>
        <InfoBlock id={orderInfo?.data.id || 1} time={currentTime}/>
        <Steps />
        <PayBlock sum={orderInfo?.data.sum || '0'} paymentMethod={orderInfo?.data.payment_method || 0} requisites={orderInfo?.data.requisites || ''} price={orderInfo?.data.price || '0'}/>
      </div>
      <div className={styles.rightBlock}>
        <Chat />
      </div>
    </div>
  );
};
export default Payment;
