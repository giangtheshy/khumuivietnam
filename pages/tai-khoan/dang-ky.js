import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useCookies } from 'react-cookie';

import { registerUser } from '../../store/actions/user.action';
import Input from '../../utils/components/Input/Input';
import File from '../../utils/components/File/File'
import Button from '../../utils/components/Button/Button';
import BackLink from '../../utils/components/BackLink/BackLink';
import styles from '../../scss/Account/Register.module.scss';

const Register = () => {
  const [data, setData] = useState({ email: "", password: "", passwordCheck: "", displayName: "", photoURL: "" })
  const dispatch = useDispatch()
  const router = useRouter()
  const [cookies, setCookies] = useCookies(["user"]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(data).every(item => item !== "")) {
      dispatch(registerUser(data, setCookies));
      setData({ email: "", password: "", passwordCheck: "", displayName: "", photoURL: "" })
      router.push('/')
    } else {
      alert("Phải điền đủ thông tin!")
    }
  }
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleChangeFile = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setData({ ...data, [e.target.name]: reader.result })
    };
    reader.onerror = () => {
      console.error('something went wrong!!!');
    };

  }
  return (
    <div className={styles.register}>
      <BackLink list={[{ href: '/', text: "Trang chủ" }, { href: '/tai-khoan', text: "Tài khoản" }, { href: '/tai-khoan/dang-ky', text: "Đăng ký" }]} />
      <section className={styles.register__wrapper}>
        <div className={styles.register__wrapper_left}>
          <div className={styles.register__wrapper_left_header}><h1>Đăng ký tài khoản</h1></div>
          <div className={styles.register__wrapper_left_center}>
            <form onSubmit={handleSubmit}>
              <Input type="text" label="Tên người dùng" placeholder="Tên người dùng" value={data.displayName} name="displayName" onChange={handleChange} />
              <Input type="email" label="Email" placeholder="Email" value={data.email} name="email" onChange={handleChange} />
              <Input type="password" label="Password" placeholder="Password" value={data.password} name="password" onChange={handleChange} />
              <Input type="password" label="Password xác nhận" placeholder="Password xác nhận lại" value={data.passwordCheck} name="passwordCheck" onChange={handleChange} />
              <div className={styles.imgCenter}>
                {data.photoURL &&
                  <img src={data.photoURL} alt="avatar" className={styles.avatar} />
                }
                <File name="photoURL" onChange={handleChangeFile} id="file" />
              </div>
              <Button type="submit" label="Đăng ký" />
            </form>
            <Link href="/tai-khoan/dang-nhap">Đăng nhập</Link>

          </div>
        </div>
        <div className={styles.register__wrapper_right}>

        </div>
      </section>
    </div>
  )
}

export default Register
