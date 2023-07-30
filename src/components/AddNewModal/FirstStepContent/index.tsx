import React, { useState } from "react";
import styles from "./index.module.scss";
import arrow from "../../../assets/icons/arrow-right.svg";
import ContentBlock from "../../UI/ContentBlock";
import Select from "react-select";

interface FirstStepContentModalProps {
  setCurrency: (currency: number) => void;
  price: number;
  setPrice: (price: number) => void;
}

const firstOptions = [
  { label: "RUB", value: "1" },
  { label: "RUB", value: "2" },
  { label: "RUB", value: "3" },
];
const secondOptions = [
  { label: "USDT", value: "1" },
  { label: "BTC", value: "2" },
  { label: "TRX", value: "3" },
];

const FirstStepContentModal = ({
  setCurrency,
  price,
  setPrice,
}: FirstStepContentModalProps) => {
  const [type, setType] = useState("notFix");
  const [percents, setPercents] = useState(111);
  return (
    <div className={styles.main}>
      <div className={styles.inputs}>
        <div>
          <p className={styles.title}>Актив</p>
          <Select
            options={secondOptions}
            classNames={{ container: (state) => styles.select }}
            classNamePrefix="react-select"
            placeholder={""}
          />
        </div>
        <img src={arrow} alt="" />
        <div className={styles.input}>
          <p className={styles.title}>За фиат</p>
          <Select
            options={firstOptions}
            classNames={{ container: (state) => styles.select }}
            classNamePrefix="react-select"
            placeholder={""}
          />
        </div>
      </div>
      <div className={styles.content}>
        <ContentBlock className={styles.contentBlock}>
          <div className={styles.prices}>
            <div className={styles.yourPrice}>
              <p className={styles.title}>Ваша цена</p>
              <p className={styles.price}>
                {type === "fix"
                  ? price === 0
                    ? `00.00`
                    : String(price.toFixed(2)).length <= 4
                    ? `0${price.toFixed(2)}`
                    : price.toFixed(2)
                  : ((price / 100) * percents).toFixed(2)}{" "}
                ₽
              </p>
            </div>
            <div>
              <p className={styles.title}>Актуальный курс</p>
              <p className={styles.price}>00.00 ₽</p>
            </div>
          </div>
          <div className={styles.type}>
            <div
              className={styles.typeContent}
              onClick={() => setType("notFix")}
            >
              <div className={styles.mainCircle}>
                {type === "notFix" && <div className={styles.circle} />}
              </div>
              <p>Плавающая</p>
            </div>
            <div className={styles.typeContent} onClick={() => setType("fix")}>
              <div className={styles.mainCircle}>
                {type === "fix" && <div className={styles.circle} />}
              </div>
              <p>Фиксированная</p>
            </div>
          </div>
        </ContentBlock>
        {type === "fix" ? (
          <ContentBlock className={styles.summ}>
            <p>Фиксированная сумма</p>
            <div className={styles.counter}>
              <p
                className={styles.controlls}
                onClick={() => {
                  price > 0 && setPrice(price - 0.1);
                  price < 0 && setPrice(0);
                }}
              >
                -
              </p>
              <div className={styles.counterContent}>
                <p>
                  {price === 0
                    ? `00.00`
                    : String(price).length <= 4
                    ? `0${price.toFixed(2)}`
                    : price.toFixed(2)}
                </p>
              </div>
              <p
                className={styles.controlls}
                onClick={() => setPrice(price + 0.01)}
              >
                +
              </p>
            </div>
          </ContentBlock>
        ) : (
          <ContentBlock className={styles.summ}>
            <p>Коэффициент маржи для плавающей цены</p>
            <div className={styles.counter}>
              <p
                className={styles.controlls}
                onClick={() => {
                  price > 0 && setPercents((prev) => prev - 1);
                  price < 0 && setPrice(0);
                }}
              >
                -
              </p>
              <div className={styles.counterContent}>
                <p>{percents}</p>
              </div>
              <p
                className={styles.controlls}
                onClick={() => setPercents((prev) => prev + 1)}
              >
                +
              </p>
            </div>
          </ContentBlock>
        )}
      </div>
    </div>
  );
};
export default FirstStepContentModal;
