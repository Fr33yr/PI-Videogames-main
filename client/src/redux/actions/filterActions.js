import {
    SORTING,
    FILTER_BY_GENRE,
    FILTER_BY_PLATFORM, 
    FILTER_BY_ORIGIN
} from '../actions.types'


// === Filter actions ===

const filterBy = (genre, platform) => {
    if (genre) {
        return {
            type: FILTER_BY_GENRE,
            payload: genre
        }
    }
    if (platform) {
        return {
            type: FILTER_BY_PLATFORM,
            payload: platform
        }
    }
}

const filterByOrigin = (payload) => {
    return {
        type: FILTER_BY_ORIGIN,
        payload
    }
}

const sortBy = (payload) => {
    return {
        type: SORTING,
        payload
    }
}

export {filterBy, filterByOrigin, sortBy}