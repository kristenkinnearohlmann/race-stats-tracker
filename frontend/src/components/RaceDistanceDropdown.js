import React from 'react'

const RaceDistanceDropdown = ({ raceDistances }) => {
    console.log(raceDistances)
    console.log(raceDistances.forEach(distance => {
        console.log(distance.id)
        console.log(distance.distance_type)
    }))
    return (
        <form>
            <select name="raceDistances" id="raceDistances">
                <option value="">Select distance</option>
                <option value="0">All</option>
                {raceDistances.map(distance => {
                    return (
                        <option value={distance.id}>{distance.distance_type}</option>
                    )
                })}
            </select>
        </form>
    )
}

export default RaceDistanceDropdown