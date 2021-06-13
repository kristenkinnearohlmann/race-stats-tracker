import React from 'react'
import RaceInstance from './RaceInstance'

const Race = ({ race }) => {
    console.log(race)
    return (
        <>
            <p>
                Race level info
            </p>
            <RaceInstance />
        </>
    )
}

export default Race