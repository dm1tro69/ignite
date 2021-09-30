import {gameDetailsURL, gameScreenShotURL} from "../api";
import axios from "axios";

const loadDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(gameDetailsURL(id))
    const screenShotData = await axios.get(gameScreenShotURL(id))
    dispatch({
        type: 'GET_DETAIL',
        payload: {
            game: detailData.data,
            screen: screenShotData.data,
        }
    })
}
export default loadDetail
