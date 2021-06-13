import React from 'react'
import RaceInstance from './RaceInstance'

const Race = ({ race }) => {
    return (
        <>
            {race.user_races.map(ur => {
                return <RaceInstance name={race.name} url={race.url} race={ur} />
            })}
        </>
    )
}

export default Race