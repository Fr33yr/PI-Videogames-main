import { useDispatch } from 'react-redux'
import { getAllGames } from '../../../redux/actions/gamesActions'
import styles from '../filters.module.css'

function NameFilter({ search, setSearch }) {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        let value = e.target.value
        setSearch({
            ...search,
            name: value
        })
    }

    const handleClick = () => {
        if (search.name) {
            dispatch(getAllGames(search.name))
        } else {
            dispatch(getAllGames())
        }
    }


    return (
        <>
            <input type="text" name="name" onChange={handleChange}
                autoComplete='off' value={search.name} placeholder='Videogame...' />
            <button type='button' onClick={handleClick} className={styles.findbtn}>Find</button>
        </>
    )
}

export default NameFilter