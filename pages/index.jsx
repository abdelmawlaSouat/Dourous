/*
 * File: index.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-03-16 3:38:01 pm
 * Last Modified: 2021-03-19 11:26:01 am
 * -----
 * Copyright (c) 2021 Yuei
 */

/**
 * TODO: add preview widget for each categorie:
 *  Course, Article, Quizz, Events, Books, Podcasts & videos
 */

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dourous - Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.billBoardContainer}>
          <div className={styles.billboardTextContainer}>
            <h1>Votre religion à portée de main</h1>
            <p>
              Découvrez les différents sujets de notre religion à travers
              différents outils tels que des cours, des livres, des podcasts et
              d&apos;autres.
            </p>
            <Link href="#">
              <a>
                <button type="button">En savoir plus</button>
              </a>
            </Link>
          </div>
          <Image
            src="/images/billboard.png"
            alt="Billboard"
            layout="intrinsic"
            width="593"
            height="635"
          />
        </div>
      </main>
    </div>
  );
}
