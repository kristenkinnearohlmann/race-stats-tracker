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
                {races.map((race, index) => {
                    const uniqRace = `${race.id}-${index}`
                    return (
                        <Race key={uniqRace} race={race} />
                    )
                })}
            </div>
        )
    }
}

export default RaceList
