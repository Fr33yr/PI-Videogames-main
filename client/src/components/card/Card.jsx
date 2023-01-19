import { DetailBtn } from '../index'
import styles from './card.module.css'

export default function Card(props) {
    const { name, genres, image, id } = props
    return (
        <>
            <div className={styles.card}>
                <img src={image ? image : "image not found"} alt={name} />
                <h3>{name}</h3>
                {genres && genres.map((g, index) => (<h4 key={`${index}-${name}`}>{g}</h4>))}
                <DetailBtn id={id} />
            </div>
        </>
    )
}