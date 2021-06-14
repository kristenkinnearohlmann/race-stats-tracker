import React from 'react'
import { Link } from 'react-router-dom'
import './RaceInstance.css'

const RaceInstance = ({ match, uniqueId, name, url, race }) => {
    const race_date_date = new Date(race.race_date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    // console.log(match)
    console.log(uniqueId)
    console.log(race.id)
    return (
        <div className="race-instance-wrapper">
            <div>
                <span>
                    {/* <a href={uniqueId}>{name}</a><br/> */}
                    <Link key={uniqueId} to={`/races/${race.id}`}>{name}</Link><br/>
                    <span className="race-instance-subdetail">
                        {race_date_date.toLocaleDateString('en-US',options)}
                        {url ? " | " : ""}
                        {url ? <a href={url} target="blank">Race website</a> : ""}
                    </span>
                </span>
            </div>
            <div>
                <div>
                    <p>
                        Time<br/>
                        <span className="race-instance-main-detail">{race.elapsed_time}</span>
                    </p>
                </div>
                <div>
                    <p>
                        Pace<br/>
                        <span className="race-instance-main-detail">{race.pace_miles}</span>
                    </p>
                </div>
                <div>
                    <p>
                        Overall<br/>
                        <span className="race-instance-main-detail">{race.overall_place}<br/>
                        <span className="race-instance-subdetail">of {race.overall_finishers}</span></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RaceInstance