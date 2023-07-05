import React, { useState } from 'react'
import styles from './index.module.scss'
import Login from '../Login'
import Register from '../Register'

const AuthorizationBlock = () => {
  const [authType, setAuthType] = useState('login')
  return (
    <div className={styles.main}>
      {authType === 'login' ? <Login /> : <Register />}
    </div>
)
}
export default AuthorizationBlock