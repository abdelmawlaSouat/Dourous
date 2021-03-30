/*
 * File: Footer.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-03-18 11:04:19 am
 * Last Modified: 2021-03-18 12:14:00 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.firstRow}>
        <div>
          <Image
            src="/images/logo.png"
            alt="Dourous"
            layout="intrinsic"
            width={100}
            height={100}
          />
          <div className={styles.footerMenuWidget}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
              <li>
                <a href="#">Purchase</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerSocialWidget}>
          <ul>
            <li className="list-inline-item">
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className={styles.secondRow}>
        <span>
          {`Copyright Dourous © ${new Date().getFullYear()}. All Rights Reserved.`}
        </span>
      </div> */}
    </footer>
  );
}
