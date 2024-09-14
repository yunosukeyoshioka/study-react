import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
import { useCallback, useEffect, useState } from 'react';
import useCounter from '../hooks/useCounter';
import useInputArray from '../hooks/useInputArray';
import useBgLightBlue from '../hooks/useBgLightBlue';

export default function About() {
  //カウンターのロジックをuseCounterで管理する
  const {count, isShow, handleClick, handleShow} = useCounter();
  const {text, array, handleChange, handleAdd}  = useInputArray();
  useBgLightBlue();
  return (
    <div className={styles.container}>
      <Head>
        <title>About page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleShow}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange}/>
      <ul>
        {array.map(item => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <button onClick={handleAdd}>追加</button>
      <p>{text}</p>



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
