import styles from '../form.module.css'

function Name({ handleChange, formValues, errors, setErrors }) {
    let regExp = /^[a-zA-Z0-9 ]*$/ 

    const handleSelect = () => {
        if(formValues.name === ''){
            setErrors({
                ...errors,
                name: 'Name is required'
            })
        }else if(!regExp.test(formValues.name)){
            setErrors({
                ...errors,
                name: 'Only letters and numbers'
            })
        }
        else{
            setErrors({})
        }
    }

    return (
        <>
            <label htmlFor="">Name</label>
            <input type="text" name="name" onChange={handleChange}
                autoComplete='off' value={formValues.name} onSelect={handleSelect}/>
            {errors.name && <p className={styles.inputerror}>{errors.name}</p>}
        </>
    )
}

export default Name