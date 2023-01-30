import styles from '../form.module.css'
import { useGenres } from '../../../hooks/index'

function Genres({ handleAddGenre, formValues, errors }) {
    const { genresOptions } = useGenres()

    return (
        <>
            <label htmlFor="">Genre</label>
            <select onChange={handleAddGenre} value={formValues.genres.length === 0 ? '--- choose genres ---' :
                formValues.genres.length}>
                <option value="--- choose genres ---" disabled={true} >--- choose genres ---</option>
                {genresOptions && genresOptions.map((g) => (
                    <option value={g.name} key={g.id} >{g.name}</option>
                ))}
            </select>
            {errors.genres && <p className={styles.inputerror}>{errors.genres}</p>}
        </>
    )
}

export default Genres