import { Card } from '../index'

export default function CardsContainer(props) {
    let {games} = props

    return (
        <>
            <div className="cardscontainer">
                {games && games.map((g) => (<Card {...g} key={g.id}/>))}
            </div>
        </>
    )
}