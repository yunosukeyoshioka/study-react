import "src/styles/globals.css";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;