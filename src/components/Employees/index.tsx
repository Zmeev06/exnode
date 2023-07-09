import React from "react";
import styles from "./index.module.scss";
import Container from "../UI/Container";
import { ReactComponent as Blockchain } from "../../assets/img/employees/Blockchain.com_logo 1 (traced).svg";
import { ReactComponent as Trust } from "../../assets/img/employees/horizontal_white 1.svg";
import { ReactComponent as Polygon } from "../../assets/img/employees/polygon_Logo 1.svg";
import { ReactComponent as Binance } from "../../assets/img/employees/Yellow.svg";
import { ReactComponent as BYBIT } from "../../assets/img/employees/bybit.svg";
import { ReactComponent as MetamaskFox } from "../../assets/img/employees/metamask-fox-wordmark-horizontal 1.svg";

const Employees = () => {
  return (
    <Container>
      <div className={styles.root}>
        <h2 className={styles.title}>Мы сотрудничаем</h2>
        <div
          className={`${styles.employeesFlexBlock} ${styles.employeesFirstBlock}`}
        >
          <Blockchain />
          <Trust />
          <Polygon />
        </div>
        <div className={styles.employeesFlexBlock}>
          <Binance />
          <BYBIT />
          <MetamaskFox />
        </div>
        {/* ================================ */}
        <div
          className={`${styles.employeesFlexBlock} ${styles.employeesFirstBlock} ${styles.mobile}`}
        >
          <Blockchain />
          <Trust />
        </div>
        <div className={`${styles.employeesFlexBlock} ${styles.mobile}`}>
          <Polygon />
          <Binance />
        </div>
        <div className={`${styles.employeesFlexBlock} ${styles.mobile}`}>
          <BYBIT />
          <MetamaskFox />
        </div>
      </div>
    </Container>
  );
};

export default Employees;
