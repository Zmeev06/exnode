import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Container from "../UI/Container";
import logo from "../../assets/img/header/logo.svg";
import arrow from "../../assets/img/header/arrow.svg";
import AuthorizationBlock from "../AuthorizationComponents/AuthorizationBlock";
import { getProfile } from "../../services/profileServices";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [status, setStatus] = useState(false);
  
  const token = localStorage.getItem("token")?.replace(/"/g, "") || "";
  const getProfileFunc = async () => {
    const { data } = await getProfile(token);
    data !== "isError" && setStatus(true);
  };
  useEffect(() => {
    getProfileFunc();
  }, []);
  return (
    <>
      <Container>
        <div className={styles.main}>
          <img src={logo} alt="" className={styles.logo} />
          <ul className={styles.nav}>
            <li className={styles.navItem}>
              <p className={styles.navItemText}>Купить криптовалюту</p>
              <img src={arrow} alt="" className={styles.navItemArrow} />
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
              <img src={arrow} alt="" className={styles.navItemArrow} />
            </li>
            <li className={styles.navItem}>
              <p className={styles.navItemText}>Поддержка</p>
              <img src={arrow} alt="" className={styles.navItemArrow} />
            </li>
          </ul>
          <div className={styles.profileBtns}>
            {status ? (
              <>
                <div
                  onClick={() => navigate("/profile")}
                  className={styles.loginBtn}
                >
                  <p>Профиль</p>
                </div>
                <div
                  className={styles.loginBtn}
                  onClick={() => {
                    localStorage.setItem("token", "");
                    setStatus(false);
                    navigate('/')
                  }}
                >
                  <p>Выйти</p>
                </div>
              </>
            ) : (
              <div
                className={styles.loginBtn}
                onClick={() => setOpenModal(true)}
              >
                <p>Войти</p>
              </div>
            )}
          </div>
        </div>
      </Container>
      <AuthorizationBlock
        openModal={openModal}
        setOpenModal={setOpenModal}
        setStatus={setStatus}
      />
    </>
  );
};
export default Header;
