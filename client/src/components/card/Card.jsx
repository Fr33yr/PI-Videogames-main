import { DetailBtn } from '../index'
import styles from './card.module.css'

export default function Card(props) {
    let { genres, id, image, name } = props

    return (
        <>
            <div className={styles.card}>
                <img src={image ? image : "image not not found"} alt="" width={180} height={200}/>
                <h3>{name}</h3>
                <div className="">
                    <h4>genre:</h4>
                    {genres && genres.map((g) => (<p key={g.id}>{g.name}</p>))}
                </div>
                <DetailBtn id={id} />
            </div>
        </>
    )
}