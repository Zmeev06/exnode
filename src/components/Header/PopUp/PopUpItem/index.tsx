import React from "react";
import styles from "./index.module.scss";

interface PopUpItemProps {
  title: string;
  text: string;
  img: string;
}

const PopUpItem = ({ text, title, img }: PopUpItemProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.imgBlock}>
        <img src={img} alt="" />
      </div>
      <div className={styles.textBlock}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
export default PopUpItem;
