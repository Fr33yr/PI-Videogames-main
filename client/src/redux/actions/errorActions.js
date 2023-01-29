import {
    RESET_ERROR,
    RESET_RESPONSE
} from '../actions.types'

// === Errors ===

const resetErrors = () => {
    return {
        type: RESET_ERROR,
    }
}

const clearResponse = () => {
    return{
        type: RESET_RESPONSE
    }
}

export {resetErrors, clearResponse}