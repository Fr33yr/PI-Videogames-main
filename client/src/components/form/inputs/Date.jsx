import styles from '../form.module.css'

function Date({ handleChange, formValues, errors }) {

    return (
        <>
        <div className={styles.inputcontainer}>
        <label htmlFor="">Release date</label>
            <input type="date" name="releaseDate" onChange={handleChange}
                value={formValues.releaseDate} />
            {errors.releaseDate && <p className={styles.inputerror}>{errors.releaseDate}</p>}
        </div>
        </>
    )
}

export default Date