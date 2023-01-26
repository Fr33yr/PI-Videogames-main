import { useState, useEffect } from 'react'
import axios from 'axios'

export function useGenres() {
    const [genresOptions, setGenresOptions] = useState([])

    useEffect(() => {
        !genresOptions.length? axios.get(`http://localhost:3001/genres`)
        .then(res => setGenresOptions(res.data))
        .catch(err => console.log(err)) : ""
    }, [genresOptions])

    return {
        genresOptions,
    }
}