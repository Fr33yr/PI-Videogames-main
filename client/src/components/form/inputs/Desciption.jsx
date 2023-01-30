import styles from '../form.module.css'

function Desciption({ formValues, handleChange, errors }) {

    return (
        <>
            <label htmlFor="">Description</label>
            <textarea name="description" cols="30" rows="10"
                onChange={handleChange} autoComplete='off'
                value={formValues.description}
            ></textarea>
            {errors.description && <p className={styles.inputerror}>{errors.description}</p>}
        </>
    )
}

export default Desciption