import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello <a href="https://nextjs.org">World😀!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <h1> Ha eunji </h1>
      </footer>
    </div>
  )
}
