import React from "react";
import styles from "./index.module.scss";
import { ReactComponent as CloseIcon } from "../../../../assets/profile/closeIcon.svg";

interface ErrorProps {
  title: string;
}

const Error = ({ title }: ErrorProps) => {
  return (
    <div className={styles.root}>
      <CloseIcon />
      <span>{title}</span>
    </div>
  );
};

export default Error;
