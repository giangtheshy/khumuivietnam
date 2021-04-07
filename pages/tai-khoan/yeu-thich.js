import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';

import Loading from '../../utils/components/Loading/Loading';
import BackLink from '../../utils/components/BackLink/BackLink';
import Meta from '../../components/Meta';
import styles from '../../scss/Account/Favorites.module.scss';
import Products from '../../utils/components/Products/Products';
import { getFavorites } from '../../store/actions/user.action';

const Favorites = () => {
  const favorites = useSelector(state => state.user.favorites)
  const [loadingPage, setLoadingPage] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector(state => state.user?.user?.user)
  const [cookies, setCookies] = useCookies(["user"])
  useEffect(() => {
    dispatch(getFavorites(cookies.user, setLoadingPage))
  }, [user])
  return (
    <div className={styles.favorites}>
      <Meta title="Sản phẩm yêu thích của bạn | khumuivietnam.com" />
      <BackLink list={[{ href: '/', text: "Trang chủ" }, { href: '/yeu-thich', text: "Yêu thích" }]} />
      {user && !loadingPage ?
        <section className={styles.favorites__wrapper}>
          <div className={styles.favorites__wrapper_header}>
            <h1>Danh sách  yêu thích ( {favorites.length} sản phẩm)</h1>
          </div>
          <div className={styles.favorites__wrapper_container}>
            <Products products={favorites} />
          </div>
        </section>
        : (<h1 style={{ textAlign: 'center' }}><Loading /></h1>)
      }
    </div>
  )
}

export default Favorites
