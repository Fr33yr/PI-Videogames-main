import styles from '../form.module.css'

function Image({ handleChange, formValues, errors, setErrors }) {

    const handleSelect = () => {
        if(!formValues.image){
            setErrors({
                ...errors,
                image: 'Image is required'
            })
        }else{
            setErrors({})
        }
    }

    return (
        <>
            <label htmlFor="">Image url</label>
            <input type="text" name='image' onChange={handleChange}
                value={formValues.image} onSelect={handleSelect}/>
            {errors.image && <p className={styles.inputerror}>{errors.image}</p>}
        </>
    )
}

export default Image