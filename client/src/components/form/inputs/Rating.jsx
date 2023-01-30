import styles from '../form.module.css'

function Rating({ handleChange, formValues, errors }) {

    return (
        <>
            <label htmlFor="">Rating</label>
            <input type="number" name="rating" max={5} min={0} step='any'
                onChange={handleChange} value={formValues.rating} />
            {errors.rating && <p className={styles.inputerror}>{errors.rating}</p>}
        </>
    )
}

export default Rating