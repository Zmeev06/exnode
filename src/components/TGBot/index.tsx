import React from "react";
import styles from "./index.module.scss";
import Container from "../UI/Container";
import FirstiPhone from "../../assets/img/tg-bot/1_iPhone-12.png";
import SecondiPhone from "../../assets/img/tg-bot/2_Wood-Hand.png";
import ThirdiPhone from "../../assets/img/tg-bot/3_iPhone 12 Pro (Wooden Hands).png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

const TGBot = () => {
  return (
    <Container className={styles.root}>
      <div className={styles.desktop}>
        <div className={styles.topImg}>
          <img className={styles.img} src={FirstiPhone} alt="" />
        </div>
        <div className={styles.bottomImg}>
          <img className={styles.img} src={SecondiPhone} alt="" />
        </div>
        <div className={styles.topImg}>
          <img className={styles.img} src={ThirdiPhone} alt="" />
        </div>
      </div>
      <div className={styles.mobile}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
        >
          <SwiperSlide className={styles.imgWrap}>
            <img className={styles.img} src={FirstiPhone} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={styles.img} src={SecondiPhone} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className={styles.img} src={ThirdiPhone} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default TGBot;
