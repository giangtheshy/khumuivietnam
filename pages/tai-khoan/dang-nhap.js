import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { GrGooglePlus } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import withAuth from "utils/HOC/withAuth";

import * as apis from "apis";
import Meta from "components/Meta";
import { loginUser } from "store/actions/user.action";
import Input from "utils/components/Input/Input";
import Button from "utils/components/Button/Button";
import BackLink from "utils/components/BackLink/BackLink";
import Loading from "utils/components/Loading/Loading";
import styles from "scss/Account/Login.module.scss";
import Alert from "components/Modal/Alert/Alert";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [loadingSocial, setLoadingSocial] = useState({ facebook: false, google: false });
  const [alert, setAlert] = useState({ message: "", type: "" });
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    // if (localStorage.getItem("firstLogin") != "true") {
    //   router.push("/tai-khoan");
    // }
    return () => setData({ email: "", password: "" });
  }, []);

  const handleSuccess = async (res) => {
    const tokenId = res.tokenId;
    setLoadingSocial({ ...loadingSocial, google: true });
    await apis.googleLogin({ tokenId });
    localStorage.setItem("firstLogin", true);
    setLoadingSocial({ ...loadingSocial, google: false });
    router.push("/");
    dispatch(loginUser());
  };
  const handleFailure = () => {
    alert("Some errors were occur when login");
  };
  const handleSuccessFacebook = async (res) => {
    const { accessToken, userID } = res;
    setLoadingSocial({ ...loadingSocial, facebook: true });
    await apis.facebookLogin({ accessToken, userID });
    localStorage.setItem("firstLogin", true);
    setLoadingSocial({ ...loadingSocial, facebook: false });
    dispatch(loginUser());
    router.push("/");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.email !== "" && data.password !== "") {
      try {
        setLoading(true);
        const res = await apis.loginUser(data);
        localStorage.setItem("firstLogin", true);
        dispatch(loginUser());
        setLoading(false);
        router.push("/");
        setAlert({ message: res.data.message, type: "success" });
      } catch (error) {
        setLoading(false);
        setAlert({ message: error.response?.data?.message, type: "error" });
      }
    } else {
      setAlert({ message: "Ph???i ??i???n ????? email v?? password!", type: "warning" });
    }
  };
  return (
    <div className={styles.login}>
      <Meta title="????ng nh???p v??o khumuivietnam shop ????? nh???n nh???ng ??u ????i ?????c bi???t v?? tr???i nghi???m t???t h??n" />
      <BackLink
        list={[
          { href: "/", text: "Trang ch???" },
          { href: "/tai-khoan", text: "T??i kho???n" },
          { href: "/tai-khoan/dang-nhap", text: "????ng nh???p" },
        ]}
      />
      <Alert show={alert.message} setShow={setAlert} type={alert.type} message={alert.message} />
      <section className={styles.login__wrapper}>
        <div className={styles.login__wrapper_left}>
          <div className={styles.login__wrapper_left_header}>
            <h1>????ng nh???p t??i kho???n</h1>
          </div>
          <div className={styles.login__wrapper_left_center}>
            <form onSubmit={handleSubmit}>
              <Input
                type="email"
                autoComplete="on"
                label="Email"
                placeholder="Email"
                value={data.email}
                name="email"
                onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
              />
              <Input
                type="password"
                autoComplete="on"
                label="Password"
                placeholder="Password"
                value={data.password}
                name="password"
                onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
              />
              <Button type="submit" label={loading ? "..." : "????ng nh???p"}>
                {loading ? <Loading /> : "????ng nh???p"}
              </Button>
            </form>
            <div className={styles.underline}></div>
            <div className={styles.socialLogin}>
              <GoogleLogin
                clientId="534972126575-ktsjvdv1ffesfff3sivvedsa5dbk7hbc.apps.googleusercontent.com"
                onSuccess={handleSuccess}
                onFailure={handleFailure}
                cookiePolicy="single_host_origin"
                render={(props) => (
                  <button className={styles.google_login} onClick={props.onClick} disabled={props.disabled}>
                    {loadingSocial.google ? <Loading /> : <GrGooglePlus className={styles.google_login_icon} />}
                    <p className={styles.google_login_text}>????ng nh???p b???ng Google</p>
                  </button>
                )}
              />
              <FacebookLogin
                appId="1201907663559639"
                autoLoad={false}
                fields="name,email,picture"
                callback={handleSuccessFacebook}
                cssClass={styles.fb_btn}
                icon={loadingSocial.facebook ? <Loading /> : <FaFacebookF className={styles.icon} />}
                textButton="????ng nh???p b???ng Facebook"
                isMobile={false}
                redirectUri="http://khumuivietnam.com"
              />
            </div>
            <label className={styles.forgotPassword} onClick={() => router.push("/user/forgot")}>
              Qu??n m???t kh???u
            </label>
          </div>
          <div className={styles.login__wrapper_left_footer}>
            <p>
              B???n ch??a c?? t??i kho???n. ????ng k?? <Link href="/tai-khoan/dang-ky">t???i ????y</Link>
            </p>
          </div>
        </div>
        <div className={styles.login__wrapper_right}></div>
      </section>
    </div>
  );
};

export default Login;
