import React from "react";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import styles from "./BackLink.module.scss";
const BackLink = ({ list }) => {
  return (
    <div className={styles.backLink}>
      {list.map((item, index) => {
        if (index === 0) {
          return (
            <Link href={item.href} className={styles.linkItem} key={index}>
              {item.text}
            </Link>
          );
        } else {
          return (
            <React.Fragment key={index}>
              <IoMdArrowDropright />
              <Link href={item.href} className={styles.linkItem}>
                {item.text}
              </Link>
            </React.Fragment>
          );
        }
      })}
    </div>
  );
};

export default BackLink;
