import React from 'react'
import './RaceInstance.css'

const RaceInstance = ({ name, url, race }) => {
    // console.log(race)

    const race_date_date = new Date(race.race_date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <div className="race-instance-wrapper">
            <div>
                <span>
                    {name}<br/>
                    <span className="race-instance-subdetail">
                        {race_date_date.toLocaleDateString('en-US',options)}
                        {url ? " | " : ""}
                        {url ? <a href={url} target="blank">Race website</a> : ""}
                    </span>
                </span>
            </div>
            <div>
                Time, pace, overall
                {race.elapsed_time}
            </div>
        </div>
    )
}

export default RaceInstance