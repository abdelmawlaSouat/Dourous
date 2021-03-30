/*
 * File: Review.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-03-20 11:41:29 am
 * Last Modified: 2021-03-20 11:49:45 am
 * -----
 * Copyright (c) 2021 Yuei
 */

import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import styles from '../styles/Review.module.css';

export default function Review({ score, count }) {
  console.log(count);
  return (
    <ul className={styles.review}>
      <li>
        <FaStar />
      </li>
      <li>
        <FaStar />
      </li>
      <li>
        <FaStar />
      </li>
      <li>
        <FaStarHalfAlt />
      </li>
      <li>
        <FaRegStar />
      </li>
      <li>{`(${score})`}</li>
    </ul>
  );
}
