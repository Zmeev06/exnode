import React, { useState } from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import UserIcon from "../../assets/icons/profile/sidebar/1_profile.svg";
import WalletIcon from "../../assets/icons/profile/sidebar/2_wallet.svg";
import BookIcon from "../../assets/icons/profile/sidebar/3_book.svg";
import ShieldIcon from "../../assets/icons/profile/sidebar/4_protection.svg";
import LockIcon from "../../assets/icons/profile/sidebar/5_lock.svg";
import ReferralIcon from "../../assets/icons/profile/sidebar/6_gift.svg";
import ForkIcon from "../../assets/icons/profile/sidebar/7_fork.svg";
import SettingsIcon from "../../assets/icons/profile/sidebar/8_settings.svg";

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
    icon: ReferralIcon,
    title: "Реферальная программа",
    route: "/profile",
  },
  {
    icon: ForkIcon,
    title: "P2P-связки",
    route: "/profile",
  },
  {
    icon: SettingsIcon,
    title: "Настройки",
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
            <img src={el.icon} alt="" />
            <h3 className={styles.sidebarItemsTitle}>{el.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
