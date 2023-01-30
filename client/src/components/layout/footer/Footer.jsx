import styles from './footer.module.css'

function Footer() {
  return (
    <>
        <footer className={styles.footer}>
          <p>Powered by</p><a href="https://rawg.io/apidocs" target="_blank" rel="noopener noreferrer">Video Games Database API</a>
        </footer>
    </>
  )
}

export default Footer