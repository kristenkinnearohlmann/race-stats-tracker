import React from 'react'
import RaceInstance from './RaceInstance'

const Race = ({ race }) => {
    return (
        <div className="race-wrapper">
            {race.user_races.map((ur,index) => {
                const uniqRaceUr = `${index}-${race.id}-${ur.id}`
                return (
                    <div key={uniqRaceUr}>
                        <RaceInstance key={uniqRaceUr} name={race.name} url={race.url} race={ur} />
                    </div>
                    
                )
            })}
        </div>
    )
}

export default Race