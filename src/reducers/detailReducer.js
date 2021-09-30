
const initialState = {
    game: {},
    screen: {}
}

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DETAIL':
            return {...state, game: action.payload.game, screen: action.screen}

        default :
            return {...state}
    }
}
export default detailReducer