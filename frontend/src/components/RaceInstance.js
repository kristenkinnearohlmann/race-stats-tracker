import React from 'react'

const RaceInstance = ({ name, url, race }) => {
    console.log(race)
    return (
        <>
            <p>
                {name}<br/>
                <a href={url} target="blank">{url}</a>
            </p>
            <p>
                {race.race_date}<br/>
                {race.elapsed_time}
            </p>
        </>
    )
}

export default RaceInstance