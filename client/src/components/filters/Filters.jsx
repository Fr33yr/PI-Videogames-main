import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { useGenres, usePaltforms } from '../../hooks'
import { sortOptions } from '../../utils/options'
import styles from './filters.module.css'

export default function Filters() {
  // === Local State ===
  const searchInitialState = {
    name: '',
    platform: '',
    genre: '',
    sortBy: '',
    filterBy: '',
    isCreated: false
  }

  const [search, setSearch] = useState(searchInitialState)
  const { platforms } = usePaltforms()
  const { genres } = useGenres()
  const dispatch = useDispatch()

  // === Handlers ===
  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setSearch(values => ({ ...values, [name]: value }))
  }

  return (
    <>
      <div className={styles.filters}>
        {/* === Name input === */}
        <input type="text" name="name" onChange={handleChange}
          autoComplete='off' value={search.name} />

        {/* === Filter by genre === */}
        <label htmlFor="">genre</label>
        <select name="genre" value={search.genre} onChange={handleChange}>
          <option value="All">All</option>
          {genres && genres.map((g) => (
            <option key={g.id} value={g.name}>{g.name}</option>
          ))}
        </select>

        {/* === Filter by platform === */}
        <label htmlFor="">platform</label>
        <select name="platform" value={search.platform} onChange={handleChange}>
          <option value="All">All</option>
          {platforms && platforms.map((p) => (
            <option key={p.id} value={p.name}>{p.name}</option>
          ))}
        </select>

        {/* === Sort === */}
        <fieldset onChange={handleChange} >
          <legend>Sort</legend>
          {sortOptions.map((o, index) => (
            <>
              <label htmlFor="">{o}</label>
              <input type="radio" name="sort" value={o} key={index + 1} />
            </>
          ))}
        </fieldset>

        {/* === Filter by origin === */}
        <label htmlFor="">Created</label>
        <input type="checkbox" name="isCreated" value={!search.isCreated}
          onChange={handleChange} checked={search.isCreated} />

        <button onClick={() => setSearch(searchInitialState)}>Reset</button>
      </div>
    </>
  )
}
