import React from 'react'
import styles from './index.module.scss'

interface ContainerProps {
  children: string | JSX.Element | JSX.Element[];
}

const Container = ({children} : ContainerProps) => {
  return (
    <div className={styles.main}>
      {children}
    </div>
)
}
export default Container