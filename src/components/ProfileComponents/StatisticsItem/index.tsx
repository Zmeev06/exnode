import React from "react";
import styles from "./index.module.scss";
import ContentBlock from "../../UI/ContentBlock";

interface StatisticsItemProps {
  title: string;
  body: string;
}

const StatisticsItem = ({ title, body }: StatisticsItemProps) => {
  return (
    <ContentBlock className={styles.gridItem}>
      <p className={styles.gridItemTitle}>{title}</p>
      <p className={styles.gridItemBody}>{body}</p>
    </ContentBlock>
  );
};

export default StatisticsItem;
