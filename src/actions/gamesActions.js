
import axios from "axios";
import {popularGamesUrl} from "../api";


export const loadGames = () => async (dispatch) => {
    const popularGames = await axios.get(popularGamesUrl())
    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularGames,
        }
    })
}

