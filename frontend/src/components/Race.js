import React from 'react'
import RaceInstance from './RaceInstance'

const Race = ({ races }) => {
    const sortedRaces = races.sort((a,b) => {
        const dateA = a.race_date
        const dateB = b.race_date
        if (dateA < dateB) {
            return 1
        }
        if (dateA > dateB) {
            return -1
        }
        return 0
    })

    const generateRaceInstances = sortedRaces.map(race => <div key={race.raceLocatorId}><RaceInstance key={race.raceLocatorId} race={race} /></div>)


    return (
        <div className="race-wrapper">
            {generateRaceInstances}
        </div>
    )
}

export default Race