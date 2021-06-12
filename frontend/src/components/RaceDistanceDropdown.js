import React from 'react'
import './RaceDistanceDropdown.css'

const RaceDistanceDropdown = ({ raceDistances }) => {
    return (
        <form>
            <label>Select race distance: </label>
            {/* add onChange={() => function to get value back up and over to filter} */}
            <select name="raceDistances" id="raceDistances">
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