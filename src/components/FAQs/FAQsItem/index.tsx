import React, { useState } from "react";
import styles from "../index.module.scss";
import { ReactComponent as RollUp } from "../../../assets/icons/FAQs/Button.svg";

interface FAQsItemProps {
  title: string;
  body: string;
}

const FAQsItem = ({ title, body }: FAQsItemProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.blockItem}>
      <div
        onClick={() => setIsVisible((prev) => !prev)}
        className={styles.blockItemTop}
      >
        <h3 className={styles.blockItemTitle}>{title}</h3>
        <RollUp className={`${isVisible && styles.blockItemBtn}`} />
      </div>
      <p
        className={`${styles.blockItemText} ${
          isVisible && styles.blockItemTextVisible
        }`}
      >
        {body}
      </p>
    </div>
  );
};

export default FAQsItem;
