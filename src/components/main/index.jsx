import styles from './styles.module.css'

function Main({ children }) {
  return <main className={styles.main}>{children}</main>
}

export default Main
