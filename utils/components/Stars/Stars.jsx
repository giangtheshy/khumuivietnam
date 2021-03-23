import React from "react";
import styles from "./Stars.module.scss";
import { GrStar } from "react-icons/gr";
const Stars = ({ stars }) => {
  const renderStar = React.useCallback(() => {
    const array = [];
    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        array.push(styles.active);
      } else {
        array.push("");
      }
    }
    return array;
  }, [stars]);
  return (
    <div className={styles.starsContainer}>
      {renderStar().map((item, index) => (
        <GrStar className={`${styles.stars} ${item}`} key={index} />
      ))}
    </div>
  );
};

export default Stars;
