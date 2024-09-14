import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
import { useCallback, useEffect, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [array, setArray] = useState([]);

  
const handleChange = useCallback((e) => {
  // if(e.target.value.length >= 5){
  //   alert("5文字以内入力してください");
  // }
    setText(e.target.value)
  }, [text])

  console.log(text);

  const handleClick = useCallback(() => {
    if(count < 10) {
      setCount((prev_count) => prev_count + 1)
    }
  }, [count]);

  const handleShow = useCallback(() => {
    setIsShow((prev_isShow) => !prev_isShow)
  }, [isShow])
  
const handleAdd = useCallback(() => {
  setArray((prev_array) => {
    if(prev_array.some(item => item === text)){
      alert("同じ値は追加できません");
      return prev_array;
    }
    return [...prev_array, text];
  })
}, [text])

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "white";
    }
  //[]内の変数が実行されたときにuseEffectが実行される
  }, [count]); 

  return (
    <div className={styles.container}>
      <Head>
        <title>Index page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {isShow ? <h1>{count}</h1> : null}

      <button onClick={handleClick}>ボタン</button>
      <button 
        onClick={handleShow}>
        {isShow ? "非表示" : "表示"}
      </button>
      <input 
        type="text" 
        value={text}
        onChange={handleChange}
      />
      <ul>
        {array.map(item => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <button onClick={handleAdd}>追加</button>
      <p>{text}</p>
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
