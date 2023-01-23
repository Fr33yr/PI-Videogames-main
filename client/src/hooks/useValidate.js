import { useState, useEffect } from "react";

export function useValidate(formInput){
    const errorInitialState = {
        textError: ''

    }
    const [error, setError] = useState({})

    useEffect(()=>{

    },[formInput])
}