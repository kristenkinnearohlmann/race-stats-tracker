import React from 'react'

const RaceInstance = ({ name, url, race }) => {
    console.log(race)
    console.log(race.race_date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    console.log(typeof Date.parse(race.race_date))
    const race_date_date = new Date(race.race_date)
    console.log(race_date_date.toLocaleDateString('en-US',options))
    // console.log(event.toLocaleDateString('en-US', options));
    return (
        <>
            <p>
                {name}<br/>
                <a href={url} target="blank">{url}</a>
            </p>
            <p>
                {race_date_date.toLocaleDateString('en-US',options)}
                <br/>
                {race.elapsed_time}
            </p>
        </>
    )
}

export default RaceInstance