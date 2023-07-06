import React, { useState } from "react";
import styles from "./index.module.scss";
import Login from "../Login";
import Register from "../Register";

const AuthorizationBlock = () => {
  const [authType, setAuthType] = useState("loginw");
  return (
    <div className={styles.root}>
      {authType === "login" ? (
        <Login setAuthType={setAuthType} />
      ) : (
        <Register setAuthType={setAuthType} />
      )}
    </div>
  );
};
export default AuthorizationBlock;
