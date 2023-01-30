import styles from '../form.module.css'
import {usePaltforms} from '../../../hooks/index'

function Platforms({ handleAddPlatform, formValues, errors }) {
    const { platformsOptions } = usePaltforms()

    return (
        <>
            <label htmlFor="">Platform</label>
            <select onChange={handleAddPlatform} value={formValues.platforms.length === 0 ? '--- choose platforms ---' :
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