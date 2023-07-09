import React, { useState } from "react";
import styles from "../index.module.scss";
import { ReactComponent as ArrowDown } from "../../../assets/icons/footer/iconamoon_arrow-down-2-thin.svg";

interface FooterItemProps {
  title: string;
  gridItems: string[];
}

const FooterItem = ({ title, gridItems }: FooterItemProps) => {
  const [isActiveItem, setIsActiveItem] = useState(false);
  return (
    <>
      <div className={`${styles.gridItem} ${styles.desktop}`}>
        <div className={styles.gridItemTop}>
          <h4 className={styles.gridTitle}>{title}</h4>
        </div>
        {gridItems.map((el) => (
          <p className={styles.gridText}>{el}</p>
        ))}
      </div>
      <div className={`${styles.gridItem} ${styles.mobile}`}>
        <div
          onClick={() => setIsActiveItem((prev) => !prev)}
          className={styles.gridItemTop}
        >
          <h4 className={styles.gridTitle}>{title}</h4>
          <ArrowDown className={`${isActiveItem && styles.svg}`} />
        </div>
        {gridItems.map((el) => (
          <p
            className={`${styles.gridText} ${
              !isActiveItem && styles.invisible
            }`}
          >
            {el}
          </p>
        ))}
      </div>
    </>
  );
};

export default FooterItem;
