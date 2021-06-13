const racesReducer = (state = {current_user: {id: 1}, race_distances: [], races: [], loading: false}, action) => {
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
            return {
                ...state,
                races: [...state.races],
                loading: true
            }

        case 'SHOW_RACES':
            return {
                ...state,
                races: [...action.races],
                loading: false
            }

        default:
            return state
    }
}

export default racesReducer