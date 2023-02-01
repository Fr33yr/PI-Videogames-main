import {useSelector} from 'react-redux'
import styles from '../form.module.css'

function Platforms({ handleAddPlatform, formValues, setFormValues, errors }) {
    const platformsOptions = useSelector(state => state.platforms)
    const handleRemove = (name) => {
        setFormValues({
            ...formValues,
            platforms: formValues.platforms.filter((p) => p !== name)
        })
    }

    return (
        <>
            <div className={styles.inputcontainer}>
                <label htmlFor="">Platform</label>
                <select onChange={handleAddPlatform} value={formValues.platforms.length === 0 ? '--- choose platforms ---' :
                    formValues.platforms.length} >
                    <option value="--- choose platforms ---" disabled={true}>--- choose platforms ---</option>
                    {platformsOptions && platformsOptions.map((p) => (
                        <option value={p.name} key={p.id}>{p.name}</option>
                    ))}
                </select>
                <div className={styles.selectedoptions}>
                    {formValues.platforms && formValues.platforms.map((p) => (
                        <>
                            <div>
                                <button onClick={() => handleRemove(p)} type='button'>X</button><p>{p}</p>
                            </div>
                        </>
                    ))}
                </div>
                {errors.platforms && <p className={styles.inputerror}>{errors.platforms}</p>}
            </div>
        </>
    )
}

export default Platforms