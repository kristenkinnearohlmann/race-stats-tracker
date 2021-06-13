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

export const addNewRace = raceObject => {
    return (dispatch) => {
        console.log("addNewRace invoked")
        const {current_user_id, name, race_distance_id, ...user_race} = {...raceObject}
        const race = {
            "name": name,
            "race_distance_id": race_distance_id
        }
        console.log({
            "current_user_id": current_user_id,
            "race": race,
            "user_race": user_race
        })
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
                console.log(responseJSON)
            })
    }
}