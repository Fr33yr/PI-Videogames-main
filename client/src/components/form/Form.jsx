import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './form.module.css'
import { resetErrors } from '../../redux/actions/errorActions'
import { createGame } from '../../redux/actions/gamesActions'
import { useGenres, usePaltforms } from '../../hooks/index'
import { validate } from '../../utils/validate'

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
    let errors = validate(formValues)

    const dispatch = useDispatch()
    

    // === Handlers === 
    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFormValues(values => ({ ...values, [name]: value }))
    }

    const handleAddGenre = (e) => {
        const value = e.target.value
        !formValues.genres.includes(value) &&
        setFormValues({
            ...formValues,
            genres: [...formValues.genres, value]
        })
    }

    const handleAddPlatform = (e) => {
        const value = e.target.value
        !formValues.platforms.includes(value) &&
        setFormValues({
            ...formValues,
            platforms: [...formValues.platforms, value]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.keys(errors).length === 0) {
            dispatch(resetErrors())
            dispatch(createGame({ ...formValues }))
            setFormValues({ ...formValuesInitialState })
        }
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit} className={styles.creationform}>
                {/* === Name input === */}
                <label htmlFor="">Name</label>
                {errors.name && <h3>{errors.name}</h3>}
                <input type="text" name="name" onChange={handleChange}
                    autoComplete='off' value={formValues.name} />

                {/* === Description input */}
                <label htmlFor="">Description</label>
                {errors.description && <h3>{errors.description}</h3>}
                <textarea name="description" cols="30" rows="10"
                    onChange={handleChange} autoComplete='off'
                    value={formValues.description}></textarea>

                {/* === Release date ===*/}
                <label htmlFor="">Release date</label>
                {errors.releaseDate && <h4>{errors.releaseDate}</h4>}
                <input type="date" name="releaseDate" onChange={handleChange}
                    value={formValues.releaseDate} />
                    
                {/* === Image === */}
                <label htmlFor="">Image url</label>
                {errors.image && <h4>{errors.image}</h4>}
                <input type="text" name='image' onChange={handleChange}
                    value={formValues.image} />

                {/* === Rating === */}
                <label htmlFor="">Rating</label>
                {errors.rating && <h4>{errors.rating}</h4>}
                <input type="number" name="rating" max={5} min={0}
                    onChange={handleChange} value={formValues.rating} />

                {/* === Genres === */}
                <label htmlFor="">Genre</label>
                {errors.genres && <h4>{errors.genres}</h4>}
                <select onChange={handleAddGenre} value={formValues.genres.length === 0 ? '--- choose genres ---' :
                    formValues.genres.length}>
                    <option value="--- choose genres ---" disabled={true}>--- choose genres ---</option>
                    {genresOptions && genresOptions.map((g) => (
                        <option value={g.name} key={g.id} >{g.name}</option>
                    ))}
                </select>

                {/* === Platforms === */}
                <label htmlFor="">Platform</label>
                {errors.platforms && <h4>{errors.platforms}</h4>}
                <select onChange={handleAddPlatform} value={formValues.platforms.length === 0 ? '--- choose platforms ---' :
                    formValues.platforms.length} >
                    <option value="--- choose platforms ---" disabled={true}>--- choose platforms ---</option>
                    {platformsOptions && platformsOptions.map((p) => (
                        <option value={p.name} key={p.id}>{p.name}</option>
                    ))}
                </select>

                <button type="submit" >Create</button>
            </form>

        </>
    )
}

export default Form