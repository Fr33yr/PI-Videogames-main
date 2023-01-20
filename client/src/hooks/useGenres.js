import { useState, useEffect } from 'react'
import axios from 'axios'

export function useGenres(url) {
    const [genres, setGenres] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3001/genres`)
        .then(res => setGenres(res.data))
        .catch(err => console.log(err))
    },[])

    return { 
        genres, 
    }
}