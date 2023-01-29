import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './form.module.css'
import { resetErrors } from '../../redux/actions/errorActions'
import { createGame } from '../../redux/actions/gamesActions'
import { useGenres, usePaltforms } from '../../hooks/index'
import { validate } from '../../utils/validate'
import {Name, Desciption, Date, Image, Rating} from '../../components/index'

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
    const [errors, setErrors] = useState({})

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
                <Name formValues={formValues} handleChange={handleChange}
                    errors={errors} setErrors={setErrors} />

                {/* === Description input */}
                <Desciption formValues={formValues} handleChange={handleChange}
                    errors={errors} setErrors={setErrors}/>

                {/* === Release date ===*/}
                <Date formValues={formValues} handleChange={handleChange}
                    errors={errors} setErrors={setErrors}/>

                {/* === Image === */}
                <Image formValues={formValues} handleChange={handleChange}
                    errors={errors} setErrors={setErrors}/>

                {/* === Rating === */}
                <Rating formValues={formValues} handleChange={handleChange}
                    errors={errors} setErrors={setErrors}/>

                {/* === Genres === */}
                <label htmlFor="">Genre</label>
                <select onChange={handleAddGenre} value={formValues.genres.length === 0 ? '--- choose genres ---' :
                    formValues.genres.length}>
                    <option value="--- choose genres ---" disabled={true}>--- choose genres ---</option>
                    {genresOptions && genresOptions.map((g) => (
                        <option value={g.name} key={g.id} >{g.name}</option>
                    ))}
                </select>

                {/* === Platforms === */}
                <label htmlFor="">Platform</label>
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