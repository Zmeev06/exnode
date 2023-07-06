import React, { useState } from "react";
import styles from "./index.module.scss";
import UserIcon from "../../../assets/profile/userIcon.svg";
import WalletIcon from "../../../assets/profile/walletIcon.svg";
import BookIcon from "../../../assets/profile/bookIcon.svg";
import ShieldIcon from "../../../assets/profile/shieldIcon.svg";
import LockIcon from "../../../assets/profile/lockIcon.svg";
import SettingsIcon from "../../../assets/profile/settingsIcon.svg";
import ReferralIcon from "../../../assets/profile/referralIcon.svg";
import { Link } from "react-router-dom";

const sidebarItems = [
  {
    icon: UserIcon,
    title: "Профиль",
    route: "/profile",
  },
  {
    icon: WalletIcon,
    title: "Кошелек",
    route: "/profile",
  },
  {
    icon: BookIcon,
    title: "История",
    route: "/profile",
  },
  {
    icon: ShieldIcon,
    title: "Безопастность",
    route: "/profile",
  },
  {
    icon: LockIcon,
    title: "Верификация",
    route: "/profile",
  },
  {
    icon: SettingsIcon,
    title: "Настройки",
    route: "/profile",
  },
  {
    icon: ReferralIcon,
    title: "Реферальная программа",
    route: "/profile",
  },
];

const Sidebar = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState(0);

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <h2 className={styles.title}>P2P</h2>
        <h3 className={styles.email}>p**********@gmail.com</h3>
      </div>
      <div className={styles.sidebarItemContainer}>
        {sidebarItems.map((el, index) => (
          <Link
            onClick={() => setActiveSidebarItem(index)}
            to={"/profile"}
            className={`${styles.sidebarItems} ${
              activeSidebarItem === index ? styles.sidebarItemsActive : ""
            }`}
            key={index}
          >
            <div className={styles.imgWrap}>
              <img src={el.icon} alt="" />
            </div>
            <h3 className={styles.sidebarItemsTitle}>{el.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
