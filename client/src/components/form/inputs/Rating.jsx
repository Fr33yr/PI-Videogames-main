import styles from '../form.module.css'

function Rating({ handleChange, formValues, errors, setErrors }) {
    const handleSelect = () => {
        if(formValues.rating < 0 || formValues.rating > 5){
            setErrors({
                ...errors,
                rating: 'Rating most be between 0-5'
            })
        }else{
            setErrors({})
        }
    }
    return (
        <>
            <label htmlFor="">Rating</label>
            <input type="number" name="rating" max={5} min={0}
                onChange={handleChange} value={formValues.rating} 
                onSelect={handleSelect}/>
            {errors.rating && <p className={styles.inputerror}>{errors.rating}</p>}
        </>
    )
}

export default Rating