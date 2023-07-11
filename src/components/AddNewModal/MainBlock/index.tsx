import React, { useState } from "react";
import styles from "./index.module.scss";
import { ReactComponent as Cross } from "../../../assets/icons/cross.svg";
import AddNewModalSwitch from "../Switch";
import AddNewSteps from "../Steps";
import FirstStepContentModal from "../FirstStepContent";
import SecondStepContent from "../SecondStepContent";
import ThirdStepContent from "../ThirdStepContent";
import { createOffer } from "../../../services/offersServices";

interface AddNewModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const AddNewModal = ({ isOpen, setIsOpen }: AddNewModalProps) => {
  const [type, setType] = useState(1);
  const [currency, setCurrency] = useState(1)
  const [step, setStep] = useState(1);
  const [price, setPrice] = useState(110);
  const [limit, setLimit] = useState(0)
  const [limitStart, setLimitStart] = useState(0)
  const [limitEnd, setLimitEnd] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState(1)
  const [requisites, setRequisites] = useState('12334')
  const token = localStorage.getItem("token")?.replace(/"/g, "") || "";

  const Create = async() => {
    const {data} = await createOffer(type, token, currency, limit, price, paymentMethod, limitStart, limitEnd, requisites)
  }
  return (
    <>
      <div
        className={`${styles.bg} ${isOpen && styles.active}`}
        onClick={() => setIsOpen(false)}
      />
      <div className={`${styles.main} ${isOpen && styles.active}`}>
        <div className={styles.topBlock}>
          <p className={styles.title}>Новое объявление</p>
          <Cross className={styles.cross} onClick={() => setIsOpen(false)} />
        </div>
        <AddNewModalSwitch type={type} setType={setType} />
        <AddNewSteps step={step} />
        {step === 1 ? (
          <FirstStepContentModal setCurrency={setCurrency} price={price} setPrice={setPrice}/>
        ) : step === 2 ? (
          <SecondStepContent limit={limit} setLimit={setLimit} limitEnd={limitEnd} setLimitEnd={setLimitEnd} limitStart={limitStart} setLimitStart={setLimitStart} setPaymentMethod={setPaymentMethod}/>
        ) : (
          <ThirdStepContent />
        )}
        <div
          className={styles.btn}
          onClick={() => {
            step !== 3 ? setStep((prev) => prev + 1) : setIsOpen(false);
            step === 3 && setStep(1);
            step === 3 && Create();
          }}
        >
          <p>Далее</p>
        </div>
      </div>
    </>
  );
};
export default AddNewModal;
