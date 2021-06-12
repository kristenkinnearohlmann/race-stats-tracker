const racesReducer = (state = {race_distances: [], loading: false}, action) => {
    switch (action.type) {
        case 'LOADING_DISTANCES':
            return {
                ...state,
                race_distances: [...state.race_distances],
                loading: true
            }    

        case 'ADD_DISTANCES':
            return {
                ...state,
                race_distances: action.race_distances,
                loading: false
            }

        default:
            return state
    }
}

export default racesReducer