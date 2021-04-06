import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import styles from '../../scss/Account/Cart.module.scss';
import BackLink from '../../utils/components/BackLink/BackLink';
import Meta from '../../components/Meta';
import ItemCart from '../../components/ItemCart/ItemCart';

import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { getCart } from '../../store/actions/cart.action';
import { SiBitly } from 'react-icons/si';

const Cart = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [cookies, setCookies] = useCookies(["user"])
  const cart = useSelector(state => state.cart.cart)
  const user = useSelector(state => state.user.user)
  useEffect(() => {
    dispatch(getCart(cookies.user))
  }, [])
  return (
    <div className={styles.cart}>
      <Meta title="Giỏ hàng của bạn | khumuivietnam.com" />
      <BackLink list={[{ href: '/', text: "Trang chủ" }, { href: '/gio-hang', text: "Giỏ hàng" }]} />
      {user ?
        <section className={styles.cartWrapper}>
          <div className={styles.cartWrapper__header}>
            <h1><span className="bold">GIỎ HÀNG</span> ( {cart.length} sản phẩm )</h1>
          </div>
          <div className={styles.content}>
            <div className={styles.content__left}>
              {cart.map(product => (<ItemCart key={product._id} product={product} />))}
            </div>
            <div className={styles.content__right}>
              <div className={styles.total}>
                <div className={styles.total__temp}>

                  <span className={styles.total__temp__text}>Tạm tính :</span>
                  <span className={styles.total__temp__price}>{cart.reduce((item, value) => item + value.price * value.quantity, 0).toLocaleString("en-US", {
                    style: "currency",
                    currency: "VND",
                  })}</span>
                </div>
                <div className={styles.total__main}>

                  <span className={styles.total__main__text}>Thành tiên:</span>
                  <span className={styles.total__main__price}>{cart.reduce((item, value) => item + value.price * value.quantity, 0).toLocaleString("en-US", {
                    style: "currency",
                    currency: "VND",
                  })}</span>
                </div>
              </div>
              <div className={styles.btnCenter}>
                <button className={styles.btn__checkout}>Giao hàng ngay</button>
                <button className={styles.btn__continue} onClick={() => router.push('/san-pham')}>Tiếp tục mua</button>
              </div>
            </div>
          </div>
        </section> : (<h1 style={{ textAlign: 'center' }}>Phải đăng nhập để dùng giỏ hàng</h1>)
      }
    </div>
  )
}

export default Cart
