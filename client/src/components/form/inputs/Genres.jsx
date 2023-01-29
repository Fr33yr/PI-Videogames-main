import styles from '../form.module.css'
import {useGenres} from '../../../hooks/index'

function Genres({ handleAddGenre, formValues, errors, setErrors}) {
    const { genresOptions } = useGenres()

    const handleFocus = () => {
        if(!formValues.genres.length){
            setErrors({
                ...errors,
                genres: 'Pick at least one genre option'
            })
        }else{
            setErrors({})
        }
    }

    return (
        <>
            <label htmlFor="">Genre</label>
            <select onChange={handleAddGenre} onFocus={handleFocus} value={formValues.genres.length === 0 ? '--- choose genres ---' :
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