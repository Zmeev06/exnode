import React, { useState } from "react";
import styles from "./index.module.scss";
import Login from "../Login";
import Register from "../Register";

interface AuthorizationBlockProps {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  setStatus: (status: boolean) => void;
}

const AuthorizationBlock = ({
  openModal,
  setOpenModal,
  setStatus,
}: AuthorizationBlockProps) => {
  const [authType, setAuthType] = useState("login");
  return (
    <>
      {openModal && (
        <div className={styles.main} onClick={() => setOpenModal(false)}>
          <div className={styles.root} onClick={(e) => e.stopPropagation()}>
            {authType === "login" ? (
              <Login
                setAuthType={setAuthType}
                setOpenModal={setOpenModal}
                setStatus={setStatus}
              />
            ) : (
              <Register setAuthType={setAuthType} setOpenModal={setOpenModal} />
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default AuthorizationBlock;
