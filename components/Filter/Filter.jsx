import React, { useState } from "react";
import styles from "./Filter.module.scss";
import InputRadio from "../../utils/components/InputRadio/InputRadio";
import { BsFilterLeft } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";

const Filter = ({ heading, products, onChange, type, value }) => {
  const [hideFilter, setHideFilter] = useState(true);
  return (
    <div className={styles.filter}>
      <div className={`${styles.heading} ${hideFilter && styles.hide}`} onClick={() => setHideFilter(!hideFilter)}>
        <h3 className={styles.heading__title}>
          <span className={styles.heading__title_left}>
            <BsFilterLeft className={styles.heading__title_left__icon} /> {heading}
          </span>
          <span className={styles.heading__title_right}>
            <RiArrowDownSLine className={styles.heading__title_right__icon} />
          </span>
        </h3>
      </div>
      <div className={`${styles.selector} `} style={hideFilter ? { height: 0 } : { height: products.length * 50 }}>
        {products.map((product, index) => {
          return <InputRadio value={product} key={index} name={type} checked={value === product} onChange={onChange} />;
        })}
      </div>
    </div>
  );
};

export default Filter;
