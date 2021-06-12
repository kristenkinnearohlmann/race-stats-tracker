import React from 'react'
import './RaceDistanceDropdown.css'

const RaceDistanceDropdown = ({ raceDistances, fetchRacesByDistance }) => {
    return (
        <form className="race-distance-form">
            <label>Select race distance: </label>
            <select name="race_distance" id="race_distance" onChange={event => fetchRacesByDistance(event.target.value)}>
                <option value="-1" selected></option>
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