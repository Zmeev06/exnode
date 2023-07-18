import React, { useState } from 'react'
import styles from './index.module.scss'
import BuySellButton from '../BuySellButton'

interface OffesrTopBlockProps {
  setType: (type: number) => void;
  type: number;
  setCurrency: (currency: number) => void;
  currency: number;
}

const OffesrTopBlock = ({setType, type, currency, setCurrency}: OffesrTopBlockProps) => {
  
  return (
    <div className={styles.main}>
      <BuySellButton type={type} setType={setType}/>
      <div className={styles.filters}>
        <p className={`${styles.filterItem} ${currency === 1 && styles.filterItemActive}`} onClick={() => setCurrency(1)}>USDT</p>
        <p className={`${styles.filterItem} ${currency === 2 && styles.filterItemActive}`} onClick={() => setCurrency(2)}>BTC</p>
        <p className={`${styles.filterItem} ${currency === 3 && styles.filterItemActive}`} onClick={() => setCurrency(3)}>ETH</p>
      </div>
    </div>
)
}
export default OffesrTopBlock