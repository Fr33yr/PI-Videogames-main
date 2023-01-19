import { Filters, Pagination, Card } from '../../components/index'
import styles from './videogames.module.css'

export default function Videogames() {
  return (
    <>
      <div className={styles.videogames}>
        <Filters />
        <div className={styles.cards}>
          <Pagination />
          <Card />
          <Pagination />
        </div>
      </div>
    </>
  )
}