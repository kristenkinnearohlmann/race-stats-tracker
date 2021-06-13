import React from 'react'
import Race from './Race'
import './RaceList.css'

const RaceList = ({ races, results }) => {
    if (races.length === 0 && results === false) {
        return <p>Select a race distance from the list to see your races.</p>
    } else if (races.length === 0 && results === true) {
        return <p>No results found for this distance.</p>
    } else {
        return (
            <div className="race-list-wrapper">
                {races.map(race => {
                    return (
                        <Race race={race} />
                    )
                })}
                {/* return (
                    <Race race={race} />
                ) */}
            </div>
        )
    }
}

export default RaceList
