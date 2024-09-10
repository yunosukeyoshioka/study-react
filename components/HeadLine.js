import styles from '../styles/Home.module.css';

export function HeadLine(props) {

  return (
   <div>
    <h1 className={styles.title}>
      {props.title}
    </h1>

    <p className={styles.description}>
      Get started by editing <code>{props.page}.js</code>
    </p>

    </div>
  );
}
