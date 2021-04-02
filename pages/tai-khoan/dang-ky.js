import React from 'react'
import BackLink from '../../utils/components/BackLink/BackLink';
import styles from '../../scss/Account/Register.module.scss';

const Register = () => {
  return (
    <div className={styles.register}>
      <BackLink list={[{ href: '/', text: "Trang chủ" }, { href: '/tai-khoan', text: "Tài khoản" }, { href: '/tai-khoan/dang-ky', text: "Đăng ký" }]} />
    </div>
  )
}

export default Register
