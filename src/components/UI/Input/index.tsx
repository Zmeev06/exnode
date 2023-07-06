import React from "react";
import styles from "./index.module.scss";

interface InputProps {
  placeholder: string;
  type?: "text" | "password" | "email";
}

const Input = ({ placeholder, type = "text" }: InputProps) => {
  return <input className={styles.inp} type={type} placeholder={placeholder} />;
};

export default Input;
