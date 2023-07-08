import React from "react";
import styles from "./index.module.scss";
import Container from "../UI/Container";
import FirstiPhone from "../../assets/img/tg-bot/1_iPhone-12.png";
import SecondiPhone from "../../assets/img/tg-bot/2_Wood-Hand.png";
import ThirdiPhone from "../../assets/img/tg-bot/3_iPhone 12 Pro (Wooden Hands).png";

const TGBot = () => {
  return (
    <Container className={styles.root}>
      <div className={styles.topImg}>
        <img className={styles.img} src={FirstiPhone} alt="" />
      </div>
      <div className={styles.bottomImg}>
        <img className={styles.img} src={SecondiPhone} alt="" />
      </div>
      <div className={styles.topImg}>
        <img className={styles.img} src={ThirdiPhone} alt="" />
      </div>
    </Container>
  );
};

export default TGBot;
