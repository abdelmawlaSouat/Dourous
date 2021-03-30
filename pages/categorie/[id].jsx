/*
 * File: [id].jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-03-18 5:24:12 pm
 * Last Modified: 2021-03-20 10:50:18 am
 * -----
 * Copyright (c) 2021 Yuei
 */

import Head from 'next/head';
import { useRouter } from 'next/router';

import CardsContainer from '../../components/CardsContainer';

export default function Category() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>{id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Details Page</h1>
        <span>{id}</span>
        <CardsContainer type="course" />
      </main>
    </div>
  );
}
