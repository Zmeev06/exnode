import React from "react";
import styles from "./index.module.scss";
// import MyIcon from "../../../../assets/profile/myIcon.svg";
import Error from "../../UI/Error";

interface ProfileTopProps {
  name: string;
}

const ProfileTop = ({ name }: ProfileTopProps) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Профиль</h2>
      <div className={styles.userInfo}>
        <div className={styles.iconWrap}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              backgroundColor: "#fff",
            }}
          ></div>
        </div>
        <div className={styles.info}>
          <h2 className={styles.titleInfo}>{name}</h2>
          <div className={styles.errorWrap}>
            <Error title="Неподтверждённый профиль" />
            <Error title="Email" />
            <Error title="Двухфакторная аутентификация (2FA)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTop;
