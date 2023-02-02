import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getAllGames } from '../../redux/actions/gamesActions'
import { resetFilters, getPlatforms, getGenres } from '../../redux/actions/filterActions'
import { NameFilter, PlatformGenreFilter, SortFilter, OriginFilter } from '../../components/index'
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
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getPlatforms())
    dispatch(getGenres())
    dispatch(getAllGames())
  }, [])

  // === Handlers ===
  const handleReset = () => {
    setSearch(searchInitialState)
    dispatch(resetFilters())
  }

  return (
    <>
      <div className={styles.filters}>

        <NameFilter search={search} setSearch={setSearch} />

        <PlatformGenreFilter search={search} setSearch={setSearch} />

        <SortFilter search={search} setSearch={setSearch}/>

        <OriginFilter search={search} setSearch={setSearch}/>

        <button onClick={handleReset} className={styles.filtersreset}>Reset</button>
      </div>
    </>
  )
}
