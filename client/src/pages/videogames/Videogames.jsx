import { useEffect } from 'react'
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
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} nPages={pages.length - 1}/>
          {Array.isArray(pages[0]) ? <CardsContainer games={pages[currentPage]}/> : <CardsContainer games={pages}/>}
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </>
  )
}