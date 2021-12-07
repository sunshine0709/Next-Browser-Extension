import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const BrowserExtensionPage: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>My Browser Extension</h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.tsx</code>
      </p>
    </main>
  )
}

export default BrowserExtensionPage
