import React from "react";
import styles from "./index.module.scss";
import { ReactComponent as ErrorIcon } from "../../../assets/icons/profile/errorIcon.svg";

interface ErrorProps {
  title: string;
}

const Error = ({ title }: ErrorProps) => {
  return (
    <div className={styles.root}>
      <ErrorIcon />
      <span>{title}</span>
    </div>
  );
};

export default Error;
