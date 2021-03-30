/*
 * File: _app.js
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-03-16 3:38:01 pm
 * Last Modified: 2021-03-19 11:27:54 am
 * -----
 * Copyright (c) 2021 Yuei
 */

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
