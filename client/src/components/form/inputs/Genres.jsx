import styles from '../form.module.css'
import { useGenres } from '../../../hooks/index'

function Genres({ handleAddGenre, formValues, setFormValues, errors }) {
    const { genresOptions } = useGenres()
    const handleRemove = (name) => {
        setFormValues({
            ...formValues,
            genres: formValues.genres.filter((g) => g !== name)
        })
    }

    return (
        <>
            <div className={styles.inputcontainer}>
                <label htmlFor="">Genre</label>
                <select onChange={handleAddGenre} value={formValues.genres.length === 0 ? '--- choose genres ---' :
                    formValues.genres.length}>
                    <option value="--- choose genres ---" disabled={true} >--- choose genres ---</option>
                    {genresOptions && genresOptions.map((g) => (
                        <option value={g.name} key={g.id} >{g.name}</option>
                    ))}
                </select>
                <div className={styles.selectedoptions}>
                    {formValues.genres && formValues.genres.map((g) => (
                        <>
                            <div>
                                <button onClick={() => handleRemove(g)} type='button'>X</button><p>{g}</p>
                            </div>
                        </>
                    ))}
                </div>
                {errors.genres && <p className={styles.inputerror}>{errors.genres}</p>}
            </div>
        </>
    )
}

export default Genres