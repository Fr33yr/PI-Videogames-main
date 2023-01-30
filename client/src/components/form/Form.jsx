import { useState } from 'react'
import { useDispatch } from 'react-redux'

import styles from './form.module.css'
import { resetErrors } from '../../redux/actions/errorActions'
import { createGame } from '../../redux/actions/gamesActions'
import { Name, Desciption, Date, Image, Rating, Genres, Platforms } from '../../components/index'
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
    const [errors, setErrors] = useState({})

    const dispatch = useDispatch()


    // === Handlers === 
    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setFormValues(values => ({ ...values, [name]: value }))
        setErrors(validate({
            ...formValues, [name]: value
        }))
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
        if (Object.keys(validate(formValues)).length !== 0) {
            return alert(Object.values(validate(formValues)))
        }
        if(formValues.genres.length === 0){
            return alert('Choose at least one genre option')
        }
        if(formValues.platforms.length === 0){
            return alert('Choose at least one platform option') 
        }
        dispatch(resetErrors())
        dispatch(createGame({ ...formValues }))
        setFormValues({ ...formValuesInitialState })
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit} className={styles.creationform}>
                {/* === Name input === */}
                <Name formValues={formValues} handleChange={handleChange}
                    errors={errors} setErrors={setErrors} />

                {/* === Description input */}
                <Desciption formValues={formValues} handleChange={handleChange}
                    errors={errors} setErrors={setErrors} />

                {/* === Release date ===*/}
                <Date formValues={formValues} handleChange={handleChange}
                    errors={errors} setErrors={setErrors} />

                {/* === Image === */}
                <Image formValues={formValues} handleChange={handleChange}
                    errors={errors} setErrors={setErrors} />

                {/* === Rating === */}
                <Rating formValues={formValues} handleChange={handleChange}
                    errors={errors} setErrors={setErrors} />

                {/* === Genres === */}
                <Genres formValues={formValues} handleAddGenre={handleAddGenre}
                    errors={errors} setErrors={setErrors} />

                {/* === Platforms === */}
                <Platforms formValues={formValues} handleAddPlatform={handleAddPlatform}
                    errors={errors} setErrors={setErrors} />

                <button type="submit" >Create</button>
            </form>

        </>
    )
}

export default Form