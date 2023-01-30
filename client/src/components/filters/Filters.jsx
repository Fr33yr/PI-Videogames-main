import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

import { useGenres, usePaltforms } from '../../hooks'
import { sortOptions } from '../../utils/options'
import { getAllGames } from '../../redux/actions/gamesActions'
import { sortBy, filterBy, filterByOrigin, resetFilters } from '../../redux/actions/filterActions'
import styles from './filters.module.css'

export default function Filters() {
  // === Local State ===
  const searchInitialState = {
    name: '',
    platform: 'All',
    genre: 'All',
    sortBy: '',
    filterBy: '',
    isCreated: false
  }

  const [search, setSearch] = useState(searchInitialState)
  const { platformsOptions } = usePaltforms()
  const { genresOptions } = useGenres()
  const dispatch = useDispatch()

  const games = useSelector(state => state.gamesCopy)

  useEffect(() => {
    if (search.name === '') {
      dispatch(getAllGames())
    } else {
      dispatch(getAllGames(search.name))
    }
  }, [search.name])

  useEffect(() => {
    if (search.sortBy) {
      dispatch(sortBy(search.sortBy))
    } else if (search.genre || search.platform) {
      dispatch(filterBy(search.genre, search.platform))
    } else if (search.isCreated) {
      dispatch(filterByOrigin(search.isCreated))
    }
  }, [search])

  // === Handlers ===
  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setSearch(values => ({ ...values, [name]: value }))
  }

  const handleReset = () => {
    setSearch(searchInitialState)
    dispatch(resetFilters())
  }

  return (
    <>
      <div className={styles.filters}>
        {/* === Name input === */}
        <input type="text" name="name" onChange={handleChange}
          autoComplete='off' value={search.name} placeholder='Videogame...'/>

        {/* === Filter by genre === */}
        <label htmlFor="">genre</label>
        <select name="genre" value={search.genre} onChange={handleChange}>
          <option value="All">All</option>
          {genresOptions && genresOptions.map((g) => (
            <option key={g.id} value={g.name}>{g.name}</option>
          ))}
        </select>

        {/* === Filter by platform === */}
        <label htmlFor="">platform</label>
        <select name="platform" value={search.platform} onChange={handleChange}>
          <option value="All">All</option>
          {platformsOptions && platformsOptions.map((p) => (
            <option key={p.id}  value={p.name}>{p.name}</option>
          ))}
        </select>

        {/* === Sort === */}
        <fieldset onChange={handleChange} >
          <legend>Sort</legend>
          {sortOptions.map((o, index) => (
            <>
              <label htmlFor="">{o}</label>
              <input type="radio" name="sortBy" value={o} key={index + 1} />
            </>
          ))}
        </fieldset>

        {/* === Filter by origin === */}
        <div className={styles.checkoption}>
          <label htmlFor="">Created</label>
          {<button onClick={() => setSearch({
            ...search,
            isCreated: !search.isCreated
          })} className={styles.originbtn}><FontAwesomeIcon icon={search.isCreated ? faCheck : faXmark} /></button>}
        </div>

        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}
