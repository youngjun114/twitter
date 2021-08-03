import React, { memo } from 'react';
import styles from './banner.module.css';

const Banner = memo(({ text, isAlert }) => (
  <>
    {text && (
      <div
        className={`${styles.banner} ${
          isAlert ? styles.banner_red : styles.banner_green
        }`}
      >
        <h1 className={styles.disc}>{text}</h1>
      </div>
    )}
  </>
));
export default Banner;
