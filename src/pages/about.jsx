import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
import { useCallback, useEffect, useState } from 'react';

export default function About(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>About page</title>
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
