import styles from '../form.module.css'

function Image({ handleChange, formValues, errors }) {

    return (
        <>
            <label htmlFor="">Image url</label>
            <input type="text" name='image' onChange={handleChange}
                value={formValues.image}  />
            {errors.image && <p className={styles.inputerror}>{errors.image}</p>}
        </>
    )
}

export default Image