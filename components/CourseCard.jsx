/*
 * File: CourseCard.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-03-18 5:13:38 pm
 * Last Modified: 2021-03-20 11:45:18 am
 * -----
 * Copyright (c) 2021 Yuei
 */

import {
  // AiOutlineHeart,
  AiOutlineUser,
} from 'react-icons/ai';
import { GoComment } from 'react-icons/go';
import { Card } from '@material-ui/core';
import Review from './Review';

import styles from '../styles/CourseCard.module.css';

export default function CourseCard() {
  return (
    <Card className={styles.card}>
      {/* Image de couverture du cours */}
      {/* <div className="thumb">
          <AiOutlineHeart />
        </div> */}
      <div className={styles.coverContainer} />

      <div className={styles.details}>
        <div className={styles.courseContent}>
          <p>Ali TUFAN</p>
          <h5>Introduction Web Design with HTML</h5>
          <Review score={4} count={1} />
          {/* <ul className="course_review">
            <li className="list-inline-item">
              <a href="#">
                <FaStar />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <FaStar />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <FaStar />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <FaStarHalfAlt />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <FaRegStar />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">(6)</a>
            </li>
          </ul> */}
        </div>
        <div className="course_footer">
          <ul className="course_meta float-left">
            <li className="list-inline-item">
              <a href="#">
                <AiOutlineUser />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">1548</a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <GoComment />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">25</a>
            </li>
          </ul>
          <div className="course_price float-right">$69.95</div>
        </div>
      </div>
    </Card>
  );
}
