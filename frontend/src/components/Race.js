import React from 'react'
import RaceInstance from './RaceInstance'

const Race = ({ race }) => {
    return (
        <>
            <p>
                {race.name}<br/>
                <a href={race.url} target="blank">{race.url}</a>
            </p>
            <RaceInstance user_races={race.user_races} />
        </>
    )
}

export default Race