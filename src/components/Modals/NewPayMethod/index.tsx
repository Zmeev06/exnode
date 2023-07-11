import React from "react";
import styles from "./index.module.scss";

interface NewPayMethodProps {
  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
}

const NewPayMethod = ({ isOpenModal, setIsOpenModal }: NewPayMethodProps) => {
  return (
    <>
      {isOpenModal && (
        <>
          <div>
            <h2>NewPayMethod</h2>
          </div>
          {/* ниже пример закрытия модалки */}
          {/* <button onClick={() => setIsOpenModal(false)}>закрыть</button> */}
        </>
      )}
    </>
  );
};

export default NewPayMethod;
