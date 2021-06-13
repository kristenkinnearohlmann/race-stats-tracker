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

// TODO: Finish pull and load of races for a user
// action to receive onChange from RaceDistanceDropdown, 
// formulate proper URL based on 0 (all) or specific race distance id,
// populate state, and load a race list component
export const fetchRacesByDistance = raceSearchParms => {
    return (dispatch) => {
        dispatch( {type: 'LOAD_RACES'} )
        const { raceDistanceId, currentUserId } = raceSearchParms
        let url;

        switch (raceDistanceId) {
            case "-1": // no selection made
                console.log("On or returned to no selection")
                dispatch( {type: 'SHOW_RACES', payload: {races: [], results: false}} )
                break
            case "0": // all races for the user
                url = `http://localhost:3001/users/${currentUserId}/races`
                break
            default: // specific race distance races for the user
                url = `http://localhost:3001/users/${currentUserId}/race_distances/${raceDistanceId}`
                break
        }

        console.log(url)

        if (url) {
            fetch(url)
            .then(response => response.json())
            .then(responseJSON => {
                let races;
                if (responseJSON.msg) {
                    races = []
                } else {
                    races = responseJSON
                }
                dispatch( {type: 'SHOW_RACES', payload: {races: races, results: true}} )
            })
        }
    }
}

export const addNewRace = raceObject => {
    return (dispatch) => {
        const {current_user_id, name, race_distance_id, ...user_race} = {...raceObject}
        const race = {
            "name": name,
            "race_distance_id": race_distance_id
        }
        const racePostObj = {
            "current_user_id": current_user_id,
            "race": race,
            "user_race": user_race
        }

        fetch('http://localhost:3001/races', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(racePostObj)
        })
            .then(response => response.json())
            .then(responseJSON => {
                window.location.href = responseJSON.redirect
            })
    }
}