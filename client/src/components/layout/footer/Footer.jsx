import { useLocation, } from 'react-router-dom'
import styles from './footer.module.css'

function Footer() {
  let location = useLocation()
  
  return (
    <>
        <footer className={styles.footer}>
          <p>Powered by</p><a href="https://rawg.io/apidocs" target="_blank" rel="noopener noreferrer">Video Games Database API</a>
        </footer>
    </>
  )
}

export default Footer