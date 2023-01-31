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
        <img src={detail.background_image ? detail.background_image : "Image not found"} alt="" />
        <h4>{detail.name}</h4>
        <p>Genres:</p>
        {detail.genres && detail.genres.map((g, index) => (
          <p key={index + 1}>{g.name}</p>
        ))}
        <p>Platforms: </p>
        {detail.platforms && detail.platforms.map((p, index) => (
          <p key={index + 2}>{p.platform.name}</p>
        ))}
        <p>Realesed: {detail.released}</p>
        <>
          {detail.description}
        </>
        <p>rating: {detail.rating}</p>
      </div>
    </>
  )
}