import React from 'react'
import { withRouter } from 'react-router-dom'
import './RaceDistanceDropdown.css'

const RaceDistanceDropdown = ({ match, location, history, raceDistances, distanceChoice, currentUserId, fetchRacesByDistance }) => {
    
    const handleOnChange = event => {
        fetchRacesByDistance({raceDistanceId: event.target.value, currentUserId: currentUserId})
        history.push('/races')
    }

    return (
        <form className="race-distance-form">
            <label>Select race distance: </label>
            <select name="racedistance_id" id="racedistance_id" defaultValue={distanceChoice} onChange={event => handleOnChange(event)}>
                <option value="-1"></option>
                <option value="0">All</option>
                {raceDistances.map(distance => {
                    return (
                        <option key={distance.id} value={distance.id}>{distance.distance_type}</option>
                    )
                })}
            </select>
        </form>
    )
}

export default withRouter(RaceDistanceDropdown)