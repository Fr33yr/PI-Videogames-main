import styles from '../form.module.css'
import {usePaltforms} from '../../../hooks/index'

function Platforms({ handleAddPlatform, formValues, errors, setErrors}) {
    const { platformsOptions } = usePaltforms()

    const handleFocus = () => {
        if(!formValues.platforms.length){
            setErrors({
                ...errors,
                platforms: 'Pick at least one genre option'
            })
        }else{
            setErrors({})
        }
    }

    return (
        <>
            <label htmlFor="">Platform</label>
            <select onChange={handleAddPlatform} onFocus={handleFocus} value={formValues.platforms.length === 0 ? '--- choose platforms ---' :
                formValues.platforms.length} >
                <option value="--- choose platforms ---" disabled={true}>--- choose platforms ---</option>
                {platformsOptions && platformsOptions.map((p) => (
                    <option value={p.name} key={p.id}>{p.name}</option>
                ))}
            </select>
            {errors.platforms && <p className={styles.inputerror}>{errors.platforms}</p>}
        </>
    )
}

export default Platforms