import React from 'react'

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
                <ul>
                    {races.map(race => {
                        return (
                            <li key={race.id}>{race.name}</li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default RaceList
