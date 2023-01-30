import styles from '../form.module.css'

function Name({ handleChange, formValues, errors }) {

    return (
        <>
            <div className={styles.inputcontainer}>
                <label htmlFor="">Name</label>
                <input type="text" name="name" onChange={handleChange}
                    autoComplete='off' value={formValues.name} />
                {errors.name && <p className={styles.inputerror}>{errors.name}</p>}
            </div>
        </>
    )
}

export default Name