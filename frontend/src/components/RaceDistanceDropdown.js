import React from 'react'
import './RaceDistanceDropdown.css'

const RaceDistanceDropdown = ({ raceDistances, fetchRacesByDistance }) => {
    return (
        <form>
            <label>Select race distance: </label>
            <select name="raceDistances" id="raceDistances" onChange={event => fetchRacesByDistance(event.target.value)}>
                <option value=""></option>
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