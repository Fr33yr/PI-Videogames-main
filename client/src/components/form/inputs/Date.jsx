import styles from '../form.module.css'

function Date({ handleChange, formValues, errors, setErrors }) {

    return (
        <>
            <label htmlFor="">Release date</label>
            <input type="date" name="releaseDate" onChange={handleChange}
                value={formValues.releaseDate} />
            {errors.releaseDate && <p className={styles.inputerror}>{errors.releaseDate}</p>}
        </>
    )
}

export default Date