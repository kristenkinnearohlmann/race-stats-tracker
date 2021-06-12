export const fetchRaceDistances = () => {
    return (dispatch) => {
        dispatch( {type: 'LOADING_DISTANCES'} )

        // add fetch and state update
        fetch('url')
            .then(response => response.json)
            .then(responseJSON => {
                dispatch( {type: 'ADD_DISTANCES', race_distances: responseJSON.race_distances} )
            })
    }
}