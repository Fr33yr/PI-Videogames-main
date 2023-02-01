import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

import {filterByOrigin} from '../../../redux/actions/filterActions'
import styles from '../filters.module.css'

function OriginFilter({search, setSearch}) {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(filterByOrigin(search.isCreated))
    },[search.isCreated])

    const handleClick = () =>{
        setSearch({
            ...search,
            isCreated: !search.isCreated
          })
    }

    return (
        <>
            <div className={styles.checkoption}>
                <label htmlFor="">Created</label>
                {<button onClick={handleClick} className={styles.originbtn} type='button'><FontAwesomeIcon icon={search.isCreated ? faCheck : faXmark} /></button>}
            </div>
        </>
    )
}

export default OriginFilter