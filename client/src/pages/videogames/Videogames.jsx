import { useState } from 'react'
import { useSelector } from 'react-redux'
import { CardsContainer, Filters, Pagination } from '../../components/index'
import { usePaginate } from '../../hooks/usePaginate'
import styles from './videogames.module.css'

export default function Videogames() {
  // === Local state ===
  const [currentPage, setCurrentPage] = useState(0)

  const games = useSelector(state => state.gamesCopy)
  let { pages } = usePaginate(games, 15, 15)

  return (
    <>
      <div className={styles.videogames}>
        <Filters />
        <div className={styles.cards}>
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <CardsContainer games={pages[currentPage]} />
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </>
  )
}