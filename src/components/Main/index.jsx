import styles from 'src/components/Main/Main.module.css';
import { Links } from 'src/components/Links';
import { HeadLine } from 'src/components/HeadLine';
// import styles from './Main.module.css';
import { useEffect, useState } from 'react';

const ITEMS =[
  {
    href: "https://nextjs.org/docs",
    title: "Documentation",
    description: "Find in-depth information about Next.js features and API."
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn",
    description: "Learn about Next.js in an interactive course with quizzes!"
  },
  {
    href: "https://github.com/vercel/next.js/tree/canary/examples",
    title: "Examples",
    description: "Discover and deploy boilerplate example Next.js projects."
  },
  {
    href: "https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy",
    description: "Instantly deploy your Next.js site to a public URL with Vercel."
  }
]

export function Main(props) {
  const [items, setItems] = useState(ITEMS);
  
  const handleReduce = () => {
    setItems(prevItems => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }


  return (
      <main className={styles.main}>
        <HeadLine 
          title={props.title}
          page={props.page}
          code={
          <p className={styles.description}>Get started by editing
          </p>
          } 
        >
          {props.children}

        </HeadLine>
        <Links items={items}/>
      </main>
  );
}
