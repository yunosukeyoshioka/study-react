import styles from 'src/components/Links/Links.module.css';

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

export function Links() {
  return (
    <div className={styles.grid}>

      {ITEMS.map((item) => {
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
