import styles from '../form.module.css'

function Desciption({ formValues, handleChange, errors, setErrors }) {

    const handleSelect = () => {
        if (!formValues.description) {
            setErrors({
                ...errors,
                description: 'Description is requierd'
            })
        } else {
            setErrors({})
        }
    }

    return (
        <>
            <label htmlFor="">Description</label>
            <textarea name="description" cols="30" rows="10"
                onChange={handleChange} autoComplete='off'
                value={formValues.description} onSelect={handleSelect}
            ></textarea>
            {errors.description && <p className={styles.inputerror}
            >{errors.description}</p>}
        </>
    )
}

export default Desciption