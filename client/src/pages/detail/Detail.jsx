import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { getGameById } from '../../redux/actions/gamesActions'
import styles from './detail.module.css'

export default function Detail() {
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGameById(params.id))
  }, [])

  // === Selectors ===
  const detail = useSelector(state => state.details)

  return (
    <>
      <div className={styles.detailscontainer}>
        <img src={detail.image ? detail.image : "Image not found"} alt={`${detail.name}-image`}
          width={800} height={600} />
        <h2>{detail.name}</h2>
        <div className={styles.plarformandgenre}>
          <div className={styles.genres}>
            <h3>Genres:</h3>
            {detail.genres && detail.genres.map((g, index) => (
              <p key={index + 1}>{g.name}</p>
            ))}
          </div>
          <div className={styles.platforms}>
            <h3>Platforms: </h3>
            {detail.platforms && detail.platforms.map((p, index) => (
              <p key={index + 2}>{p.name}</p>
            ))}
          </div>
        </div>
        <p><b>Realesed:</b> {detail.releaseDate}</p>
        <p className={styles.description}>
          {detail.description}
        </p>
        <b>rating: {detail.rating}</b>
      </div>
    </>
  )
}