import { DetailBtn } from '../index'
import styles from './card.module.css'

export default function Card(props) {
    let {genres, id, image, name, platforms, rating, released} = props

    return (
        <>
            <div className={styles.card}>
                
                <h3>{name}</h3>
                
                <DetailBtn id={id} />
            </div>
        </>
    )
}