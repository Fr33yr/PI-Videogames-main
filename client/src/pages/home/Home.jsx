import { Link } from 'react-router-dom'
import styles from './home.module.css'

export default function Home() {
  return (
    <>
      <Link to={'/games'}>Videogames</Link>
    </>
  )
}