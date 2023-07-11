import React, { useState } from "react";
import styles from "./index.module.scss";
import { Circle } from "rc-progress";
import { useParams } from "react-router-dom";

interface InfoBlockProps {
  time: string;
  m: number;
  s:number;
}
const InfoBlock = ({ time, m, s }: InfoBlockProps) => {
  
  const [timerValue, setTimerValue] = useState(100);

  const { id } = useParams();

  

  React.useEffect(() => {
    const timerValueChange = setInterval(
      () => setTimerValue((prev) => prev - 1),
      9000
    );
    return () => {
      clearInterval(timerValueChange);
    };
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.number}>
        <p className={styles.title}>ID сделки</p>
        <p className={styles.value}>{id}</p>
      </div>
      <div className={styles.time}>
        <p className={styles.title}>Время создания</p>
        <p className={styles.value}>{time}</p>
      </div>
      <div className={styles.timerBlock}>
        <Circle
          percent={timerValue}
          strokeWidth={4}
          strokeColor={"#7272f4eb"}
          className={styles.timer}
        />
        <p className={styles.timerText}>
          {String(m).length === 1 ? `0${m}` : m}:
          {String(s).length === 1 ? `0${s}` : s}{" "}
        </p>
      </div>
    </div>
  );
};
export default InfoBlock;
