import styles from 'src/components/Links/Links.module.css';
import { useState } from 'react';



export function Links({items}) {

  return (
    <div className={styles.grid}>
      {items.map((item) => {
        return (
          <a href={item.href} className={styles.card} key={item.href}>
            <h3>{item.title} &rarr;</h3>
            <p>{item.description}</p>
          </a>
        )})
      }
    </div>
  );
}
