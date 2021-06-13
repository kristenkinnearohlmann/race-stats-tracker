import React from 'react'
import Race from './Race'

const RaceList = ({ races, results }) => {
    console.log(races)
    if (races.length === 0 && results === false) {
        return <p>Select a race distance from the list to see your races.</p>
    } else if (races.length === 0 && results === true) {
        return <p>No results found for this distance.</p>
    } else {
        return (
            // TODO: Add Race component to render races
            <>
                {races.map(race => {
                    return (
                        <Race race={race} />
                    )
                })}
            </>
        )
    }
}

export default RaceList
