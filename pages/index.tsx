import type { NextPage } from 'next'
import styles from '../styles/BrowserExtension.module.css'

const BrowserExtensionPage: NextPage = () => {
  return (
    <main className={styles.container}>
      <h1>My Browser Extension</h1>

      <p>
        Get started by editing{' '}
        <code>pages/index.tsx</code>
      </p>
    </main>
  )
}

export default BrowserExtensionPage
