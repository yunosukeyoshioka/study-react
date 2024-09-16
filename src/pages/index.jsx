import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
import { useCallback, useEffect, useState } from 'react';
import useCounter from '../hooks/useCounter';
import useInputArray from '../hooks/useInputArray';
import useBgLightBlue from '../hooks/useBgLightBlue';

//_app.jsxkpropsを受け取ったものを使用する
export default function Home(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Index page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {props.isShow ? <h1>{props.count}</h1> : null}
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleShow}>{props.isShow ? "非表示" : "表示"}</button>
      <input type="text" value={props.text} onChange={props.handleChange}/>
      <ul>
        {props.array.map(item => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <button onClick={props.handleAdd}>追加</button>
      <p>{props.text}</p>


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
