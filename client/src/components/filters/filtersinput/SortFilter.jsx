import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { sortBy } from '../../../redux/actions/filterActions'
import {sortOptions} from '../../../utils/options'

function SortFilter({ search, setSearch }) {
    const dispatch = useDispatch()

    useEffect(() => {
        if(search.sortBy){
            dispatch(sortBy(search.sortBy))
        }
    }, [search.sortBy])

    const handleChange = (e) =>{
        let value = e.target.value
        setSearch({
            ...search,
            sortBy: value
        })
    }

    return (
        <>
            <fieldset onChange={handleChange} >
                <legend>Sort</legend>
                {sortOptions.map((o, index) => (
                    <>
                        <label htmlFor="">{o}</label>
                        <input type="radio" name="sortBy" value={o} key={index + 1} />
                    </>
                ))}
            </fieldset>
        </>
    )
}

export default SortFilter