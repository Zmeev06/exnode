import React from "react";
import styles from "./index.module.scss";
import Container from "../UI/Container";
import logo from '../../assets/img/header/logo.svg'
import arrow from '../../assets/img/header/arrow.svg'

const Header = () => {
  return (
    <Container>
      <div className={styles.main}>
        <img src={logo} alt="" className={styles.logo} />
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <p className={styles.navItemText}>Купить криптовалюту</p>
            <img
              src={arrow}
              alt=""
              className={styles.navItemArrow}
            />
          </li>
          <li className={`${styles.navItem} ${styles.newItem}`}>
            <p className={styles.navItemText}>P2P-торговля</p>
            <div className={styles.newBlock}>
              <p className={styles.newText}>new</p>
            </div>
          </li>
          <li className={styles.navItem}>
            <p className={styles.navItemText}>DeFi</p>
          </li>
          <li className={styles.navItem}>
            <p className={styles.navItemText}>Процессинг</p>
          </li>
          <li className={styles.navItem}>
            <p className={styles.navItemText}>Статьи</p>
            <img
              src={arrow}
              alt=""
              className={styles.navItemArrow}
            />
          </li>
          <li className={styles.navItem}>
            <p className={styles.navItemText}>Поддержка</p>
            <img
              src={arrow}
              alt=""
              className={styles.navItemArrow}
            />
          </li>
        </ul>
        <div className={styles.loginBtn}>
          <p>Войти</p>
        </div>
      </div>
    </Container>
  );
};
export default Header;
