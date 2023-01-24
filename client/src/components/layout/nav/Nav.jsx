import { Link, useLocation, } from 'react-router-dom'

import styles from './nav.module.css'

function Nav() {
  let location = useLocation()

  return (
    <>
      <nav className={styles.navbar}>
        {location.pathname === '/' ? "" :
          <>
            <ul>
              <li>
                <Link to={'addgame'}>Add new game</Link>
              </li>
              <li>
                <Link to={'games'}>Games</Link>
              </li>
            </ul>
          </>}
      </nav>
    </>
  )
}

export default Nav