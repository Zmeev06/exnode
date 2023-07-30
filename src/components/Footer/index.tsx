import React from "react";
import styles from "./index.module.scss";
import Logo from "../../assets/img/header/logo.svg";
import { ReactComponent as TG } from "../../assets/icons/footer/telegram.svg.svg";
import { ReactComponent as YouTube } from "../../assets/icons/footer/youtube.svg.svg";
import { ReactComponent as VK } from "../../assets/icons/footer/vk.svg.svg";
import { ReactComponent as Vcru } from "../../assets/icons/footer/vcru.svg.svg";
import { ReactComponent as Email } from "../../assets/icons/footer/email.svg";
import FooterItem from "./FooterItem";

const data = [
  {
    title: "Продукты",
    gridItems: ["Мониторинг", "P2P-торговля", "DeFi"],
  },
  {
    title: "Поддержка",
    gridItems: [
      "Контакты",
      "Политика конфиденциальности",
      "Условия соглашения",
      "Руководство по торговле",
      "Правила торговли",
    ],
  },
  {
    title: "Социальные сети",
    gridItems: ["Telegram", "VK", "YouTube"],
  },
  {
    title: "Торговля",
    gridItems: ["Купить USDT", "Продать USDT"],
  },
];

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
        {data.map((el) => (
          <FooterItem title={el.title} gridItems={el.gridItems} />
        ))}
      </div>
      <a href="https://freekassa.ru" target="_blank" rel="noopener noreferrer" className={styles.fk}>
        <img
          src="https://cdn.freekassa.ru/banners/small-red-1.png"
          title="Прием платежей на сайте для физических лиц и т.д."
          alt=""
          className={styles.fk}
        />
      </a>
    </div>
  );
};

export default Footer;
