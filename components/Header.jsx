/*
 * File: Header.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-03-16 6:43:35 pm
 * Last Modified: 2021-03-18 11:15:21 am
 * -----
 * Copyright (c) 2021 Yuei
 */

import Image from 'next/image';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

import LibraryMenu from './LibraryMenu';
import SearchBar from './SearchBar';
import styles from '../styles/Header.module.css';
import categories from '../data/categories.json';

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div>
        {/* Logo Container */}
        <div className={styles.logoContainer}>
          <Link href="/">
            <a>
              <Image
                src="/images/logo.png"
                alt="Dourous"
                layout="intrinsic"
                width={150}
                height={150}
              />
            </a>
          </Link>
        </div>
        <LibraryMenu categories={categories} />
      </div>

      <SearchBar placeholder="Rechercher un sujet en particulier..." />

      {/* NavBar */}
      <ul className={styles.authenticationLinks}>
        <li>
          <FaUser />
        </li>
        <Link href="#">
          <a>
            <li>Se connecter</li>
          </a>
        </Link>
        <li>·</li>
        <Link href="#">
          <a>
            <li>S&apos;inscrire</li>
          </a>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
