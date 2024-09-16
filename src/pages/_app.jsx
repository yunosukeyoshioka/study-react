import "src/styles/global.css";
import Head from 'next/head';
import useCounter from '../hooks/useCounter';
import useInputArray from '../hooks/useInputArray';
import useBgLightBlue from '../hooks/useBgLightBlue';


//全てのページ間で状態の受け渡しをするために使用する。propsでコンポーネントに移す
function MyApp({ Component, pageProps }) {
  //カウンターのロジックをuseCounterで管理する
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgLightBlue();
  
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Component {...pageProps} {...counter} {...inputArray}/>
    </>
  );
}

export default MyApp;