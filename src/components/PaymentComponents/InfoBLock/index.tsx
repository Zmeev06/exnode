import React, { useState } from "react";
import styles from "./index.module.scss";
import { Circle } from "rc-progress";
import { useParams } from "react-router-dom";

interface InfoBlockProps {
  time: string;
}
const InfoBlock = ({ time }: InfoBlockProps) => {
  const [[m, s], setTime] = useState([15, 0]);
  const [over, setOver] = useState(false);
  const [timerValue, setTimerValue] = useState(100);

  const { id } = useParams();

  const tick = () => {
    if (m === 0 && s === 0) {
      setOver(true);
    } else if (s === 0) {
      setTime([m - 1, 59]);
    } else {
      setTime([m, s - 1]);
    }
  };

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  });

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
