import React, { useState } from "react";
import styles from "./index.module.scss";
import PaymentMethod from "../PaymentMethod";
import Feedback from "../Feedback";
import ContentBlock from "../../UI/ContentBlock";

const ProfileBottom = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className={styles.root}>
      <div className={styles.nav}>
        <button
          className={`${styles.navBtn} ${
            activeSlide === 0 ? styles.navBtnActive : ""
          }`}
          onClick={() => setActiveSlide(0)}
        >
          Способ(-ы) оплаты для P2P
        </button>
        <button
          className={`${styles.navBtn} ${
            activeSlide === 1 ? styles.navBtnActive : ""
          }`}
          onClick={() => setActiveSlide(1)}
        >
          Обратная связь
        </button>
      </div>
      <ContentBlock>
        {activeSlide === 0 ? <PaymentMethod /> : <Feedback />}
      </ContentBlock>
    </div>
  );
};

export default ProfileBottom;
