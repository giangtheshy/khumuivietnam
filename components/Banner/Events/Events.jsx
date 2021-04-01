import React from "react";
import styles from "./Events.module.scss";

const Events = () => {
  return (
    <div className={styles.eventsSection}>
      <div className={styles.eventsCenter}>
        <div className={styles.eventsHeader}>
          <h2>Tin Nỗi Bật</h2>
        </div>
        <div className={styles.eventsContainer}>
          <article className={styles.eventItem}>
            <img
              src="https://adminbeauty.hvnet.vn/Upload/Files/Paula's-Choice-Daily-Skin-Clearing-Treatment-Extra.jpg?width=350&height=391&v=15042020"
              alt="XkmShop"
              title="XkmShop"
              className={styles.eventImg}
            />
            <div className={styles.eventDetails}>
              <h3 className={styles.title}>
                khumuivietnam.com chuyên bán các loại xịt khử mùi tốt và rẻ nhất dành cho mọi cấp bậc,lứa tuổi. Cam đoan
                không tốt không nhận tiền!
              </h3>
              <p className={styles.timer}>22-28/0222</p>
            </div>
          </article>
          <article className={styles.eventItem}>
            <img
              src="https://adminbeauty.hvnet.vn/Upload/Files/Paula's-Choice-Daily-Skin-Clearing-Treatment-Extra.jpg?width=350&height=391&v=15042020"
              alt="XkmShop"
              title="XkmShop"
              className={styles.eventImg}
            />
            <div className={styles.eventDetails}>
              <h3 className={styles.title}>
                khumuivietnam.com chuyên bán các loại xịt khử mùi tốt và rẻ nhất dành cho mọi cấp bậc,lứa tuổi. Cam đoan
                không tốt không nhận tiền!
              </h3>
              <p className={styles.timer}>22-28/0222</p>
            </div>
          </article>
          <article className={styles.eventItem}>
            <img
              src="https://adminbeauty.hvnet.vn/Upload/Files/Paula's-Choice-Daily-Skin-Clearing-Treatment-Extra.jpg?width=350&height=391&v=15042020"
              alt="XkmShop"
              title="XkmShop"
              className={styles.eventImg}
            />
            <div className={styles.eventDetails}>
              <h3 className={styles.title}>
                khumuivietnam.com chuyên bán các loại xịt khử mùi tốt và rẻ nhất dành cho mọi cấp bậc,lứa tuổi. Cam đoan
                không tốt không nhận tiền!
              </h3>
              <p className={styles.timer}>22-28/0222</p>
            </div>
          </article>
        </div>
      </div>
      {/* <div className={styles.eventAds}>
        <img
          src="https://bizweb.dktcdn.net/100/021/944/themes/723706/assets/banner_under_slider.png?1616296243114"
          alt="image ads"
          title="XkmShop"
        />
      </div> */}
    </div>
  );
};

export default Events;
