import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CardsContainer, Filters, Loader, Pagination } from '../../components/index'
import { Paginate } from '../../utils/paginate'
import { resetErrors } from '../../redux/actions/errorActions'
import styles from './videogames.module.css'

export default function Videogames() {
  // === Local state ===
  const [currentPage, setCurrentPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const games = useSelector(state => state.gamesCopy)
  let pages = Paginate(games, 15, 15)

  useEffect(() => {
    dispatch(resetErrors())
    !games || games.length === 0 ? setLoading(true) : setLoading(false)
  }, [games])

  return (
    <>
      {loading ? <Loader /> :
        <div className={styles.videogames}>
          <Filters />
          <div className={styles.cards}>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}
              nPages={Array.isArray(pages[0]) ? pages.length - 1 : 0} />

            {Array.isArray(pages[0]) ? <CardsContainer games={pages[currentPage]} /> : <CardsContainer games={pages} />}

            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}
              nPages={Array.isArray(pages[0]) ? pages.length - 1 : 0} />
          </div>
        </div>
      }
    </>

  )
}