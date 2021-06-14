import React from 'react'
import RaceInstance from './RaceInstance'

const Race = ({ races }) => {
    const generateRaceInstances = races.map(race => <div key={race.raceLocatorId}><RaceInstance key={race.raceLocatorId} race={race} /></div>)


    return (
        <div className="race-wrapper">
            {generateRaceInstances}
        </div>
    )
}

export default Race