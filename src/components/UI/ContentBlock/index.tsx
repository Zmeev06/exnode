import React from "react";
import styles from "./index.module.scss";

interface ContentBlockProps {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
}

const ContentBlock = ({ children, className }: ContentBlockProps) => {
  return <div className={`${styles.main} ${className}`}>{children}</div>;
};
export default ContentBlock;
