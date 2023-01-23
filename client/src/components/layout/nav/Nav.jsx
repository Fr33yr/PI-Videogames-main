import {Link} from 'react-router-dom'

import styles from './nav.module.css'

function Nav() {
  return (
    <>
        <nav className={styles.navbar}>
            <ul>
              <li>
                <Link to={'/addgame'}>Add new game</Link>
              </li>
            </ul>
        </nav>
    </>
  )
}

export default Nav