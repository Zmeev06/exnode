import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import logo from "../../assets/img/header/miniLogo.svg";
import burger from "../../assets/img/header/burger.svg";
import cross from "../../assets/img/header/cross.svg";
import arrow from "../../assets/img/header/arrow.svg";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../services/profileServices";
import AuthorizationBlock from "../AuthorizationComponents/AuthorizationBlock";

const HeaderSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <div className={styles.main}>
        <div className={styles.header}>
          <img src={logo} alt="" className={styles.logo} />
          <img
            src={isOpen ? cross : burger}
            alt=""
            className={styles.burger}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div className={`${styles.content} ${isOpen && styles.active}`}>
          <div className={styles.navigation}>
            <div className={styles.navItem}>
              <p>Купить криптовалюту</p>
              <img src={arrow} alt="" className={styles.navItemArrow} />
            </div>
            <div className={styles.navItem}>
              <div className={styles.newItem}>
                <p>P2P-торговля</p>
                <div className={styles.newBlock}>
                  <p className={styles.newText}>new</p>
                </div>
              </div>
            </div>
            <div className={styles.navItem}>
              <p>DeFi</p>
            </div>
            <div className={styles.navItem}>
              <p>Процессинг</p>
            </div>
            <div className={styles.navItem}>
              <p>Статьи</p>
              <img src={arrow} alt="" className={styles.navItemArrow} />
            </div>
            <div className={styles.navItem}>
              <p>Поддержка</p>
              <img src={arrow} alt="" className={styles.navItemArrow} />
            </div>
            {status ? (
              <>
                <div
                  className={styles.loginBtn}
                  onClick={() => navigate("/profile")}
                >
                  <p>Профиль</p>
                </div>
                <div
                  className={styles.exitBtn}
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
      </div>
      <AuthorizationBlock
        openModal={openModal}
        setOpenModal={setOpenModal}
        setStatus={setStatus}
      />
    </>
  );
};
export default HeaderSidebar;
