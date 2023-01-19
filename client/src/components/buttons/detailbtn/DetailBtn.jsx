import { Link } from 'react-router-dom'

function DetailBtn({ id }) {
    return (
        <>
            <Link to={`/game/${id}`}>Details</Link>
        </>
    )
}

export default DetailBtn