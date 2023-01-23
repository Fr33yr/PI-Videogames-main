import { Link } from 'react-router-dom'
import styles from './detailbtn.module.css'

function DetailBtn({ id }) {
    return (
        <>
            <Link to={`/game/${id}`} className={styles.detailbtn}>Details</Link>
        </>
    )
}

export default DetailBtn