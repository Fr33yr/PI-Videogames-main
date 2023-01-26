import { useState, useEffect } from 'react'
import axios from 'axios'

export function usePaltforms() {
    const [platformsOptions, setPlatformsOptions] = useState([])

    useEffect(()=>{
        !platformsOptions.length ? axios.get(`http://localhost:3001/platforms`)
        .then(res => setPlatformsOptions(res.data))
        .catch(err => console.log(err)) : ""
    },[platformsOptions])

    return { 
        platformsOptions, 
    }
}