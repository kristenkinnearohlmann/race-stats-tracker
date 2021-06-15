const racesReducer = (state = {current_user: {id: 1}, race_distances: [], races: [], distance_choice: -1, results: false, loading: false}, action) => {
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
                races: [],
                loading: true,
                results: false
            }

        case 'SHOW_RACES':
            const { races, distance_choice, results } = action.payload
            console.log(distance_choice)
            return {
                ...state,
                races: [...races],
                distance_choice: distance_choice,
                loading: false,
                results: results
            }

        case 'RESET_RACES':
            return {
                ...state,
                races: [],
                loading: false,
                results: false,
                distance_choice: -1
            }

        default:
            return state
    }
}

export default racesReducer