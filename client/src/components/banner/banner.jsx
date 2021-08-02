import React, { memo } from 'react';
import styles from './banner.module.css';

const Banner = memo(({ text, isAlert }) => (
  <>
    {text && (
      <p className={isAlert ? styles.banner_red : styles.banner_green}>
        {text}
      </p>
    )}
  </>
));
export default Banner;
