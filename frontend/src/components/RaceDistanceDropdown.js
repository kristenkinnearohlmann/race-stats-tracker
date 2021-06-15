import React from 'react'
import './RaceDistanceDropdown.css'

const RaceDistanceDropdown = ({ raceDistances, distanceChoice, currentUserId, fetchRacesByDistance }) => {

    return (
        <form className="race-distance-form">
            <label>Select race distance: </label>
            <select name="racedistance_id" id="racedistance_id" defaultValue={distanceChoice} onChange={event => fetchRacesByDistance({raceDistanceId: event.target.value, currentUserId: currentUserId})}>
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

export default RaceDistanceDropdown