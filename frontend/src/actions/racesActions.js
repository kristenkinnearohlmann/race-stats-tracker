export const fetchRaceDistances = () => {
    return (dispatch) => {
        dispatch( {type: 'LOAD_DISTANCES'} )

        fetch('http://localhost:3001/race_distances')
            .then(response => response.json())
            .then(responseJSON => {
                dispatch( {type: 'SHOW_DISTANCES', race_distances: responseJSON} )
            })
    }
}

// action to receive onChange from RaceDistanceDropdown, 
// formulate proper URL based on 0 (all) or specific race distance id,
// populate state, and load a race list component
export const fetchRacesByDistance = raceDistanceId => {
    return (dispatch) => {
        dispatch( {type: 'LOAD_RACES'} )
        console.log(raceDistanceId)
        let url;

        // if (raceDistanceId === 0) {
        //     url = ""
        //     // url: 'http://localhost:3001/races'
        // } else {
        //     url = ""
        //     // url: ''http://localhost:3001/race_distances/:id/races'
        // }

        // fetch(url)
        //     .then(response => response.json())
        //     .then(responseJSON => {
        //         dispatch( {type: 'SHOW_RACES', races: responseJSON} )
        //     })
    }
}