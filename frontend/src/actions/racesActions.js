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

export const fetchRacesByDistance = raceSearchParms => {
    return (dispatch) => {
        dispatch( {type: 'LOAD_RACES'} )
        
        const { raceDistanceId, currentUserId } = raceSearchParms
        let url;

        switch (raceDistanceId) {
            case "-1": // no selection made
                dispatch( {type: 'SHOW_RACES', payload: {races: [], results: false, distance_choice: -1}} )
                break
            case "0": // all races for the user
                url = `http://localhost:3001/users/${currentUserId}/races`
                break
            default: // specific race distance races for the user
                url = `http://localhost:3001/users/${currentUserId}/race_distances/${raceDistanceId}`
                break
        }

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
                console.log(raceDistanceId)
                dispatch( {type: 'SHOW_RACES', payload: {races: races, results: true, distance_choice: raceDistanceId}} )
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

export const clearRaces = () => {
    return (dispatch) => {
        dispatch( {type: 'RESET_RACES'} )
    }
}