import { useState, useEffect } from 'react'
import axios from 'axios'

export function usePaltforms(url) {
    const [platforms, setPlatforms] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3001/platforms`)
        .then(res => setPlatforms(res.data))
        .catch(err => console.log(err))
    },[])

    return { 
        platforms, 
    }
}