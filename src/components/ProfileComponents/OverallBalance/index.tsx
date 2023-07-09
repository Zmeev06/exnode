import styles from "./index.module.scss";
import RecentTransactions from "../RecentTransactions";
import BalanceBlock from "../BalanceBlock";
import RecentTransactionsAdaptive from "../RecentTransactionsAdaptive";

interface OveralBalanceProps {
  balance: number;
}

const OveralBalance = ({ balance }: OveralBalanceProps) => {
  return (
    <div className={styles.main}>
      <BalanceBlock balance={balance} />
      <RecentTransactions />
      <RecentTransactionsAdaptive />
    </div>
  );
};

export default OveralBalance;
