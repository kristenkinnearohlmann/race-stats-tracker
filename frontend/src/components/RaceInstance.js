import React from 'react'
import { Link } from 'react-router-dom'
import './RaceInstance.css'

const RaceInstance = ({ race }) => {
    const race_date_date = new Date(race.race_date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <div className="race-instance-wrapper">
            <div>
                <span>
                    <Link key={race.raceLocatorId} to={`/races/${race.raceLocatorId}`}>{race.name}</Link><br/>
                    <span className="race-instance-subdetail">
                        {race_date_date.toLocaleDateString('en-US',options)}
                        {race.url ? " | " : ""}
                        {race.url ? <a href={race.url} target="blank">Race website</a> : ""}
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
                        <span className="race-instance-subdetail-block">of {race.overall_finishers}</span></span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RaceInstance