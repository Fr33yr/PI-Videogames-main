import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './form.module.css'
import { resetErrors } from '../../redux/actions'
import { useGenres, usePaltforms } from '../../hooks/index'

function Form() {
    // === Local state ===
    const formValuesInitialState = {
        name: '',
        description: '',
        releaseDate: '',
        image: '',
        rating: 0,
        created: true,
        genres: [],
        platforms: []
    }
    const [formValues, setFormValues] = useState
    const { genres } = useGenres()
    const { platforms } = usePaltforms()

    const dispatch = useDispatch()


    // === Handlers === 
    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFormValues(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(resetErrors())
        console.table(formValues);
        setFormValues({ ...formValuesInitialState })
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit} className={styles.creationform}>
                {/* === Name input === */}
                <label htmlFor="">Name</label>
                <input type="text" name="name" onChange={handleChange} />
                {/* === Description input */}
                <label htmlFor="">Description</label>
                <textarea name="description" id="" cols="30" rows="10"
                    onChange={handleChange}></textarea>
                {/* === Release date ===*/}
                <label htmlFor="">Release date</label>
                <input type="date" name="releaseDate" onChange={handleChange} />
                {/* === Image === */}
                <label htmlFor="">Image url</label>
                <input type="text" name='image' onChange={handleChange} />
                {/* === Rating === */}
                <label htmlFor="">Rating</label>
                <input type="number" name="rating" max={5} min={0}
                    onChange={handleChange} />
                {/* === Genres === */}
                <select name="genres" onChange={handleChange}>
                    {genres && genres.map((g) => (
                        <>
                            <option value={g.name} key={g.id}>{g.name}</option>
                        </>
                    ))}
                </select>
                {/* === Platforms === */}
                <select name="platforms" onChange={handleChange}>
                    {platforms && platforms.map((p) => (
                        <>
                            <option value={p.name} key={g.id}>{g.name}</option>
                        </>
                    ))}
                </select>

                <button type="submit">Create</button>
            </form>
        </>
    )
}

export default Form