import { Card } from '../index'

export default function CardsContainer({ games }) {

    return (
        <>
            <div className="cardscontainer">
                {games && games.map((g) => (
                    <>
                        <Card {...g} key={g.id}/>
                    </>
                ))}
            </div>
        </>
    )
}