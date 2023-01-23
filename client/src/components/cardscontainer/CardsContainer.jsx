import { Card } from '../index'
import styles from './cardscontainer.module.css'

export default function CardsContainer(props) {
    let {games} = props

    return (
        <>
            <div className={styles.cardscontainer}>
                {games && games.map((g) => (<Card {...g} key={g.id}/>))}
            </div>
        </>
    )
}