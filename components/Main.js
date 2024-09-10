import styles from '../styles/Home.module.css';
import { Links } from '../components/Links';
import { HeadLine } from '../components/HeadLine';

export function Main(props) {
  return (

      <main>
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
