import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterBy } from '../../../redux/actions/filterActions'

function PlatformGenreFilter({ search, setSearch }) {
    const dispatch = useDispatch()

    const genresOptions = useSelector(state => state.genres)
    const platformsOptions = useSelector(state => state.platforms)

    useEffect(() => {
        if (search.genre || search.platform) {
            dispatch(filterBy(search.genre, search.platform))
        }
    }, [search.genre, search.platform])

    const handleGenreChange = (e) => {
        let value = e.target.value
        setSearch({
            ...search,
            genre: value
        })
    }

    const handlePlatformChange = (e) => {
        let value = e.target.value
        setSearch({
            ...search,
            platform: value
        })
    }

    return (
        <>
            {/* === Filter by genre === */}
            <label htmlFor="">genre</label>
            <select name="genre" value={search.genre} onChange={handleGenreChange}>
                <option value="All">All</option>
                {genresOptions && genresOptions.map((g) => (
                    <option key={g.id} value={g.name}>{g.name}</option>
                ))}
            </select>

            {/* === Filter by platform === */}
            <label htmlFor="">platform</label>
            <select name="platform" value={search.platform} onChange={handlePlatformChange}>
                <option value="All">All</option>
                {platformsOptions && platformsOptions.map((p) => (
                    <option key={p.id} value={p.name}>{p.name}</option>
                ))}
            </select>
        </>
    )
}

export default PlatformGenreFilter