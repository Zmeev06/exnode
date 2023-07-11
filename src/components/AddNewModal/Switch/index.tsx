import React from "react";
import styles from "./index.module.scss";

interface AddNewModalSwitchProps {
  type: string;
  setType: (type: string) => void;
}

const AddNewModalSwitch = ({ type, setType }: AddNewModalSwitchProps) => {
  return (
    <div className={styles.main}>
      <div className={`${styles.btn} ${type === "buy" && styles.active}`} onClick={() => setType('buy')}>
        <p>Купить</p>
      </div>
      <div className={`${styles.btn} ${type === "sell" && styles.active}`} onClick={() => setType('sell')}>
        <p>Продать</p>
      </div>
    </div>
  );
};
export default AddNewModalSwitch;
