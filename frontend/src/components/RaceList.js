import React from 'react'

const RaceList = ({ races }) => {
    // TODO: add logic to return boilerplate on first load
    // or when dropdown changes to empty
    // OR the selected race list
    if (races.length === 0) {
        return <p>Select a race distance from the list to see your races.</p>
    } else {
        return (
            <>
                <p>
                    <ul>
                        {races.map(race => {
                            return (
                                <li>{race.name}</li>
                            )
                        })}
                    </ul>
                </p>
            </>
        )
    }
}

export default RaceList
