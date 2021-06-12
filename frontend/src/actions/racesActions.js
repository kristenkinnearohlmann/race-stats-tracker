export const fetchRaceDistances = () => {
    return (dispatch) => {
        dispatch( {type: 'LOADING_DISTANCES'} )

        // add fetch and state update
        fetch('http://localhost:3001/race_distances')
            .then(response => response.json())
            .then(responseJSON => {
                dispatch( {type: 'ADD_DISTANCES', race_distances: responseJSON} )
            })
    }
}

// action to receive onChange from RaceDistanceDropdown, 
// formulate proper URL based on 0 (all) or specific race distance id,
// populate state, and load a race list component