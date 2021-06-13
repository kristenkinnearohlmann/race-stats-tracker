import React from 'react'
import './RaceInstance.css'

const RaceInstance = ({ name, url, race }) => {
    // console.log(race)

    const race_date_date = new Date(race.race_date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <div className="race-instance-wrapper">
            <div>
                {name}<br/>
                <a href={url} target="blank">{url}</a><br/>
                {race_date_date.toLocaleDateString('en-US',options)}
            </div>
            <div>
                {race.elapsed_time}
            </div>
        </div>
    )
}

export default RaceInstance