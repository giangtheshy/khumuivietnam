import React from 'react'

import BackLink from '../../utils/components/BackLink/BackLink';
import styles from '../../scss/Account/Account.module.scss';
const Account = () => {
  return (
    <div className={styles.account}>
      <BackLink list={[{ href: '/', text: "Trang chủ" }, { href: '/tai-khoan', text: "Tài khoản" }]} />
    </div>
  )
}

export default Account
