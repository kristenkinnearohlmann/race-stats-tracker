import React from 'react'

const RaceInstanceDetail = ({ match, races }) => {
    const urlSegments = match.url.split("/")
    const selectedRace = races.find(race => race.raceLocatorId === urlSegments[urlSegments.length - 1])
    const race_date_date = new Date(selectedRace.race_date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <div>
            <div>
            <span>
                    {selectedRace.name}<br/>
                    <span className="race-instance-subdetail">
                        {race_date_date.toLocaleDateString('en-US',options)}
                        {selectedRace.url ? " | " : ""}
                        {selectedRace.url ? <a href={selectedRace.url} target="blank">Race website</a> : ""}
                    </span>
                </span>
            </div>
            <p>
                Return to <a href="/races">Races</a>
            </p>
        </div>
    )
}

export default RaceInstanceDetail