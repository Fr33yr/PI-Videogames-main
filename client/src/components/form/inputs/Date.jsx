import styles from '../form.module.css'

function Date({handleChange, formValues, errors, setErrors}) {

    const handleSelect = () => {
        if(formValues.releaseDate === ''){
            setErrors({
                ...errors,
                releaseDate: 'Date is required'
            })
        }else{
            setErrors({})
        }
    }

    return (
        <>
            <label htmlFor="">Release date</label>
            <input type="date" name="releaseDate" onChange={handleChange}
                value={formValues.releaseDate} onSelect={handleSelect}/>
            {errors.releaseDate && <p className={styles.inputerror}>{errors.releaseDate}</p>}
        </>
    )
}

export default Date