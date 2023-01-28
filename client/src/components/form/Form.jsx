import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './form.module.css'
import { resetErrors } from '../../redux/actions/errorActions'
import { createGame } from '../../redux/actions/gamesActions'
import { useGenres, usePaltforms, useValidate } from '../../hooks/index'

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
    const [formValues, setFormValues] = useState({ ...formValuesInitialState })

    const { genresOptions } = useGenres()
    const { platformsOptions } = usePaltforms()

    const dispatch = useDispatch()


    // === Handlers === 
    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFormValues(values => ({ ...values, [name]: value }))
    }

    const handleAddGenre = (e) => {
        const value = e.target.value
        setFormValues({
            ...formValues,
            genres: [...formValues.genres, value]
        })
    }

    const handleAddPlatform = (e) => {
        const value = e.target.value
        setFormValues({
            ...formValues,
            platforms: [...formValues.platforms, value]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //dispatch(resetErrors())
        //dispatch(createGame({ ...formValues, genres, platforms }))
        setFormValues({ ...formValuesInitialState })
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit} className={styles.creationform}>
                {/* === Name input === */}
                <label htmlFor="">Name</label>
                <input type="text" name="name" onChange={handleChange}
                    autoComplete='off' />
                {/* === Description input */}
                <label htmlFor="">Description</label>
                <textarea name="description" id="" cols="30" rows="10"
                    onChange={handleChange} autoComplete='off'></textarea>
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
                <label htmlFor="">Genre</label>
                <select onChange={handleAddGenre} defaultValue={'--- choose genres ---'}>
                    <option value="--- choose genres ---" disabled={true}>--- choose genres ---</option>
                    {genresOptions && genresOptions.map((g) => (
                        <option value={g.name} key={g.id}>{g.name}</option>
                    ))}
                </select>
                {/* === Platforms === */}
                <label htmlFor="">Platform</label>
                <select onChange={handleAddPlatform} defaultValue={'--- choose platforms ---'}>
                    <option value="--- choose platforms ---" disabled={true}>--- choose platforms ---</option>
                    {platformsOptions && platformsOptions.map((p) => (
                        <option value={p.name} key={p.id}>{p.name}</option>
                    ))}
                </select>

                <button type="submit">Create</button>
            </form>

        </>
    )
}

export default Form