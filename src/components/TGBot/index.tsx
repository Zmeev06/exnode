import React from "react";
import styles from "./index.module.scss";
import Container from "../UI/Container";
import FirstiPhone from "../../assets/img/tg-bot/1_iPhone-12.png";
import SecondiPhone from "../../assets/img/tg-bot/2_Wood-Hand.png";
import ThirdiPhone from "../../assets/img/tg-bot/3_iPhone 12 Pro (Wooden Hands).png";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss/navigation";
import "swiper/css";

const TGBot = () => {
  return (
    <Container className={styles.root}>
      <div className={styles.desktop}>
        <div className={styles.topImg}>
          <img className={styles.img} src={FirstiPhone} alt="" />
        </div>
        <div className={styles.bottomImg}>
          <img className={`${styles.img} ${styles.ebanytayaImg}`} src={SecondiPhone} alt="" />
        </div>
        <div className={styles.topImg}>
          <img className={styles.img} src={ThirdiPhone} alt="" />
        </div>
      </div>
      <div className={styles.mobile}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          loop
          navigation
          className={styles.swiper}
        >
          <SwiperSlide className={styles.slide}>
            <img className={styles.mobileImg} src={FirstiPhone} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img className={styles.mobileImg} src={SecondiPhone} alt="" />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img className={styles.mobileImg} src={ThirdiPhone} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default TGBot;
