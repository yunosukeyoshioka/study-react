import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import { Main } from '../components/main';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main title="About" page="page about">
        <code>pages/about.js</code>
      </Main>
      <Footer />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
