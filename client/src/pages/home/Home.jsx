import { Link } from 'react-router-dom'
import styles from './home.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <Link to={'/games'} className={styles.homelink}>Videogames</Link>
      </div>
    </>
  )
}