import {
    RESET_ERROR,
} from '../actions.types'

// === Errors ===

const resetErrors = () => {
    return {
        type: RESET_ERROR,
    }
}

export {resetErrors}