import styles from './index.module.scss'
import RecentTransactions from "../RecentTransactions";
import BalanceBlock from "../BalanceBlock";

interface OveralBalanceProps {
  balance: number
}

const OveralBalance = ({balance}: OveralBalanceProps) => {
  

  return (
    <div className={styles.main}>
      <BalanceBlock balance={balance}/>
      <RecentTransactions />
    </div>
  );
};

export default OveralBalance;
