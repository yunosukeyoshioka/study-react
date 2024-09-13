import styles from 'src/components/Main/Main.module.css';
import { Links } from 'src/components/Links';
import { HeadLine } from 'src/components/HeadLine';
// import styles from './Main.module.css';
import { useEffect } from 'react';

export function Main(props) {

  useEffect(() => {
    console.log("マウント");
    document.body.style.backgroundColor = "red";
    return () => {
      console.log("アンマウント");
      document.body.style.backgroundColor = "";
    }
  }, []);
  
  return (
      <main className={styles.main}>
        <HeadLine 
          title={props.title}
          page={props.page}
          code={<p className={styles.description}>
        Get started by editing
        </p>} 
        >
          {props.children}
        </HeadLine>
        <Links />

      </main>

  );
}
