import React from "react";
import styles from "./index.module.scss";
import Logo from "../../assets/img/header/logo.svg";
import { ReactComponent as TG } from "../../assets/icons/footer/telegram.svg.svg";
import { ReactComponent as YouTube } from "../../assets/icons/footer/youtube.svg.svg";
import { ReactComponent as VK } from "../../assets/icons/footer/vk.svg.svg";
import { ReactComponent as Vcru } from "../../assets/icons/footer/vcru.svg.svg";
import { ReactComponent as Email } from "../../assets/icons/footer/email.svg";

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.contactBlock}>
        <div>
          <img src={Logo} alt="" className={styles.logo} />
        </div>
        <div className={styles.contacts}>
          <TG />
          <YouTube />
          <VK />
          <Vcru />
        </div>
        <div className={styles.emailBlock}>
          <Email />
          <span>p2p@exnode.ru</span>
        </div>
        <div className={styles.right}>© 2023 DCX-P2P. Все права защищены.</div>
      </div>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <h4 className={styles.gridTitle}>Продукты</h4>
          <p className={styles.gridText}>Мониторинг</p>
          <p className={styles.gridText}>P2P-торговля</p>
          <p className={styles.gridText}>DeFi</p>
        </div>
        <div className={styles.gridItem}>
          <h4 className={styles.gridTitle}>Поддержка</h4>
          <p className={styles.gridText}>Контакты</p>
          <p className={styles.gridText}>Политика конфиденциальности</p>
          <p className={styles.gridText}>Условия соглашения</p>
          <p className={styles.gridText}>Руководство по торговле</p>
          <p className={styles.gridText}>Правила торговли</p>
        </div>
        <div className={styles.gridItem}>
          <h4 className={styles.gridTitle}>Социальные сети</h4>
          <p className={styles.gridText}>Telegram</p>
          <p className={styles.gridText}>VK</p>
          <p className={styles.gridText}>YouTube</p>
        </div>
        <div className={styles.gridItem}>
          <h4 className={styles.gridTitle}>Торговля</h4>
          <p className={styles.gridText}>Купить USDT</p>
          <p className={styles.gridText}>Продать USDT</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
