import React, { useState } from 'react'
import GoogleLogin from 'react-google-login';
import { GrGooglePlus } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useCookies } from 'react-cookie';

import Meta from '../../components/Meta';
import { loginUser } from '../../store/actions/user.action';
import Input from '../../utils/components/Input/Input';
import Button from '../../utils/components/Button/Button';
import { loginGoogle } from '../../store/actions/user.action';
import BackLink from '../../utils/components/BackLink/BackLink';
import Loading from '../../utils/components/Loading/Loading';
import styles from '../../scss/Account/Login.module.scss';

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" })
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const [cookies, setCookies] = useCookies(["user"]);
  const handleSuccess = async (res) => {
    const { name, imageUrl, email, googleId } = res.profileObj;
    const token = res.tokenId;
    dispatch(loginGoogle({ name, imageUrl, googleId, email, token }, setCookies));
    router.push("/");
  };
  const handleFailure = () => {
    alert("Some errors were occur when login");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.email !== "" && data.password !== "") {
      const error = await dispatch(loginUser(data, setCookies, setLoading));
      if (error) {
        alert(error);
      } else {
        setData({ email: "", password: "" })
        router.push('/')

      }
    } else {
      alert("Phải điền đủ email và password!")
    }
  }
  return (
    <div className={styles.login}>
      <Meta title="Đăng nhập vào khumuivietnam shop để nhận những ưu đãi đặc biệt và trải nghiệm tốt hơn" />
      <BackLink list={[{ href: '/', text: "Trang chủ" }, { href: '/tai-khoan', text: "Tài khoản" }, { href: '/tai-khoan/dang-nhap', text: "Đăng nhập" }]} />
      <section className={styles.login__wrapper}>
        <div className={styles.login__wrapper_left}>
          <div className={styles.login__wrapper_left_header}><h1>Đăng nhập tài khoản</h1></div>
          <div className={styles.login__wrapper_left_center}>
            <form onSubmit={handleSubmit}>
              <Input type="email" autoComplete="on" label="Email" placeholder="Email" value={data.email} name="email" onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />
              <Input type="password" autoComplete="on" label="Password" placeholder="Password" value={data.password} name="password" onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />
              <Button type="submit" label={loading ? '...' : "Đăng nhập"} >{loading ? <Loading /> : "Đăng nhập"}</Button>
            </form>
            <div className={styles.underline}></div>
            <GoogleLogin
              clientId="534972126575-ktsjvdv1ffesfff3sivvedsa5dbk7hbc.apps.googleusercontent.com"
              onSuccess={handleSuccess}
              onFailure={handleFailure}
              cookiePolicy="single_host_origin"
              render={(props) => (
                <button className={styles.google_login} onClick={props.onClick} disabled={props.disabled}>
                  <GrGooglePlus className={styles.google_login_icon} /> <span className={styles.google_login_text}>Đăng nhập bằng Google</span>
                </button>
              )}
            />
            <label className={styles.forgotPassword} >Quên mật khẩu</label>
          </div>
          <div className={styles.login__wrapper_left_footer}>
            <p>Bạn chưa có tài khoản. Đăng ký <Link href="/tai-khoan/dang-ky">tại đây</Link></p>
          </div>
        </div>
        <div className={styles.login__wrapper_right}>

        </div>
      </section>

    </div>
  )
}

export default Login
