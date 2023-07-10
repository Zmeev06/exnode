import React, { useState } from 'react'
import styles from './index.module.scss'
import BuySellButton from '../BuySellButton'

interface OffesrTopBlockProps {
  setType: (type: number) => void;
  type: number
}

const OffesrTopBlock = ({setType, type}: OffesrTopBlockProps) => {
  const [activeFilter, setActiveFilter] = useState('usdt')
  return (
    <div className={styles.main}>
      <BuySellButton type={type} setType={setType}/>
      <div className={styles.filters}>
        <p className={`${styles.filterItem} ${activeFilter === 'usdt' && styles.filterItemActive}`} onClick={() => setActiveFilter('usdt')}>USDT</p>
        <p className={`${styles.filterItem} ${activeFilter === 'btc' && styles.filterItemActive}`} onClick={() => setActiveFilter('btc')}>BTC</p>
        <p className={`${styles.filterItem} ${activeFilter === 'eth' && styles.filterItemActive}`} onClick={() => setActiveFilter('eth')}>ETH</p>
      </div>
    </div>
)
}
export default OffesrTopBlock