import styles from 'src/components/Headline/Headline.module.css';

export function HeadLine(props) {

  return (
   <div>
    <h1 className={styles.title}>
      {props.title}
    </h1>
    <button onClick={props.handleReduce}>リセット</button>
    <p className={styles.description}>
      Get started by editing {props.children}
    </p>

    </div>
  );
}
