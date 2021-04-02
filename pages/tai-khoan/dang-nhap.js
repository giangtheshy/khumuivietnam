import React from 'react'
import BackLink from '../../utils/components/BackLink/BackLink';
import styles from '../../scss/Account/Login.module.scss';

const Login = () => {
  return (
    <div className={styles.login}>
      <BackLink list={[{ href: '/', text: "Trang chủ" }, { href: '/tai-khoan', text: "Tài khoản" }, { href: '/tai-khoan/dang-nhap', text: "Đăng nhập" }]} />
    </div>
  )
}

export default Login
