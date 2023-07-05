import React, { useState } from 'react'
import styles from './index.module.scss'

const BuySellButton = () => {
  const [activeBtn, setActiveBtn] = useState('buy')
  return (
    <div className={styles.main}>
      <div className={`${styles.btn} ${activeBtn === 'buy' && styles.buyActive}`} onClick={() => setActiveBtn('buy')}>
        <p className={styles.btnText}>Купить</p>
      </div>
      <div className={`${styles.btn} ${activeBtn === 'sell' && styles.sellActive}`} onClick={() => setActiveBtn('sell')}>
        <p className={styles.btnText}>Продать</p>
      </div>
    </div>
)
}
export default BuySellButton