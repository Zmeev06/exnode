import React from "react";
import styles from "./index.module.scss";
import analitic from "../../../assets/icons/analitic.svg";
import swp from "../../../assets/icons/swp.svg";
import p2p from "../../../assets/icons/p2p.svg";
import cash from "../../../assets/icons/cash.svg";
import PopUpItem from "./PopUpItem";

interface PopUpProps {
  isOpen: boolean;
}

const PopUp = ({ isOpen }: PopUpProps) => {
  const items = [
    {
      img: analitic,
      title: "Мониторинг",
      text: "Выгодный курс для обмена",
    },
    {
      img: swp,
      title: "SWAP",
      text: "Лучший курс обмена токенов",
    },
    {
      img: p2p,
      title: "P2P-торговля",
      text: "Различные способы оплаты",
    },
    {
      img: cash,
      title: "Наличные",
      text: "Сделки при помощи наличных",
    },
  ];
  return (
    <>
    {isOpen && (
      <div className={styles.main}>
        {items.map((item, index) => (
          <PopUpItem
            img={item.img}
            text={item.text}
            title={item.title}
            key={index}
          />
        ))}
      </div>)}
      </>
    )
};
export default PopUp;
