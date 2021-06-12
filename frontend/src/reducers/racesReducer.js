const racesReducer = (state = {race_distances: [], loading: false}, action) => {
    switch (action.type) {
        case 'LOAD_DISTANCES':
            return {
                ...state,
                race_distances: [...state.race_distances],
                loading: true
            }    

        case 'SHOW_DISTANCES':
            return {
                ...state,
                race_distances: action.race_distances,
                loading: false
            }

        case 'LOAD_RACES':
            // replace with proper state change
            return state

        case 'SHOW_RACES':
            // replace with proper state change
            return state

        default:
            return state
    }
}

export default racesReducer