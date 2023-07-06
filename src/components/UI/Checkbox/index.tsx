import React from "react";
import styles from "./index.module.scss";

interface CheckboxProps {
  text: string;
  className: string;
}

const Checkbox = ({ text, className }: CheckboxProps) => {
  return (
    <div>
      <input
        type="checkbox"
        className="custom-checkbox"
        id="happy"
        name="happy"
        value="yes"
      />
      <label htmlFor="happy">{text}</label>
    </div>
  );
};

export default Checkbox;
