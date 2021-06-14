import React from 'react'

const RaceInstanceDetail = ({ match, uniqueId, name, url, race }) => {
    const race_date_date = new Date(race.race_date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <div>
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
            <p>
                Go back to <a href="/races">Races</a>
            </p>
        </div>
    )
}

export default RaceInstanceDetail