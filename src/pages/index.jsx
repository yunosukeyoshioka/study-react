import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
import { useCallback, useEffect, useState } from 'react';

export default function Home() {
  const [foo, setFoo] = useState(1)
  
  const handleClick =(e) => {
    setFoo((foo) => foo + 1)
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "white";
    }
  }, []); 

  return (
    <div className={styles.container}>
      <Head>
        <title>Index page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <h1>{foo}</h1>
      <button onClick={handleClick}>ボタン</button>

      <Main title="Index" page="page index">

        <code>pages/index.js</code>
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
