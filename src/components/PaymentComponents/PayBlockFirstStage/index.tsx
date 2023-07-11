import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import PayBlock from "../../UI/PayBlock";

import ConfirmModal from "../ConfirmModal";
import CancelModal from "../CancelModal";
// import ContentBlock from "../../UI/ContentBlock";
// import TextButton from "../../UI/TextButton";

interface PayBlockFirstStageProps {
  sum: string;
  price: string;
  requisites: string;
  paymentMethod: number;
  setStep: (step: number) => void;
  step: number;
  m: number;
  s: number;
}

const PayBlockFirstStage = ({
  sum,
  price,
  requisites,
  paymentMethod,
  setStep,
  step,
  m,
  s,
}: PayBlockFirstStageProps) => {
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [isOpenCancel, setIsOpenCancel] = useState(false);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    if (m === 0 && s === 0) {
      setStatus(true);
    }
  }, [m, s]);

  return (
    <>
      <PayBlock
        header="Подтвердитеeeee информацию об ордере"
        sum={sum}
        priceRub={price}
        priceUSDT={price}
      >
        <p className={styles.title}>
          Переведите средства на счет продавца по реквизитам
        </p>
        <div className={styles.requisites}>
          <div className={styles.payMethod}>
            <p className={styles.payMethodText}>Tinkoff</p>
          </div>
          <div className={styles.saller}>
            <div className={styles.sallerInfo}>
              <p className={styles.sallerTitle}>Контрагент</p>
              {/* Имя контрагента */}
              <p className={styles.sallerText}>{requisites}</p>
            </div>
            <div className={styles.sallerInfo}>
              <p className={styles.sallerTitle}>Номер карты</p>
              <p className={styles.sallerText}>{requisites}</p>
            </div>
          </div>
        </div>
        
        <div className={styles.btnsBlock}>
          {step === 1 ? (
            <div className={styles.btn} onClick={() => setIsOpenConfirm(true)}>
              <p className={styles.btnText}>Я оплатил</p>
            </div>
          ) : step === 2 && !status ? (
            <div className={styles.btn} onClick={() => setIsOpenConfirm(true)}>
              <p className={styles.btnText}>
                {`Подача апелляции возможна через: ${
                  String(m).length === 1 ? `0${m}` : m
                }: ${String(s).length === 1 ? `0${s}` : s}`}
              </p>
            </div>
          ) : (
            step === 2 &&
            status && (
              <>
                <div className={styles.resetBlock}>
                  <p className={styles.reset}>Апелляция</p>
                </div>
                <div className={styles.btn}>
                  <p className={styles.btnText}>Подтвердить оплату</p>
                </div>
              </>
            )
          )}
          <div className={styles.resetBlock} onClick={() => setIsOpenCancel(true)}>
            <p className={styles.reset}>Отменить сделку</p>
          </div>
        </div>
      </PayBlock>
      {isOpenConfirm && (
        <ConfirmModal setIsOpen={setIsOpenConfirm} setStep={setStep} />
      )}
      {isOpenCancel && <CancelModal setIsOpen={setIsOpenCancel}/>}
    </>
  );
};
export default PayBlockFirstStage;
