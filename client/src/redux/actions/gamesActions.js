import axios from 'axios'
import {
    GET_GAMES, GET_DETAILS, ERROR,
    CREATE_GAME
} from '../actions.types'



// === Games actions ===
const getAllGames = (name) => {
    return async function (dispatch) {
        try {
            if (name && name !== '') {
                const games = await axios.get(`http://localhost:3001/games?name=${name}`)
                return dispatch({
                    type: GET_GAMES,
                    payload: games.data
                })
            } else {
                const games = await axios.get(`http://localhost:3001/games`)
                return dispatch({
                    type: GET_GAMES,
                    payload: games.data
                })
            }
        } catch (error) {
            dispatch({ type: ERROR, payload: error })
        }
    }
}

const getGameById = (id) => {
    return async function (dispatch) {
        axios.get(`http://localhost:3001/games/${id}`)
            .then(res => res.data)
            .then(d => dispatch({
                type: GET_DETAILS,
                payload: d
            }))
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: err.data.error
                })
            })
    }
}

const createGame = (props) => {
    return async function (dispatch) {
        axios.post(`http://localhost:3001/games/`, props)
            .then(res => res.data)
            .then(d => dispatch({
                type: CREATE_GAME,
                payload: d
            }))
            .catch(err => {
                let error = err.response.data.error
                dispatch({
                    type: ERROR,
                    payload: error
                })
            })
    }
}

export { createGame, getAllGames, getGameById }