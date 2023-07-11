import React, { useState } from "react";
import styles from "./index.module.scss";
import {ReactComponent as Cross} from '../../../assets/icons/cross.svg';
import AddNewModalSwitch from "../Switch";
import AddNewSteps from "../Steps";
import FirstStepContentModal from "../FirstStepContent";

interface AddNewModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const AddNewModal = ({isOpen, setIsOpen}: AddNewModalProps) => {
  const [type, setType] = useState('buy')
  const [step, setStep] = useState(3)
  return (
    <>
      <div className={`${styles.bg} ${isOpen && styles.active}`} onClick={() => setIsOpen(false)}/>
      <div className={`${styles.main} ${isOpen && styles.active}`}>
        <div className={styles.topBlock}>
          <p className={styles.title}>Новое объявление</p>
          <Cross className={styles.cross} onClick={() => setIsOpen(false)}/>
        </div>
        <AddNewModalSwitch type={type} setType={setType}/>
        <AddNewSteps step={step}/>
        <FirstStepContentModal />
      </div>
    </>
  );
};
export default AddNewModal;
