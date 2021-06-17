import React from 'react'
import './RaceInstanceDetail.css'

const RaceInstanceDetail = ({ match, races }) => {
    const urlSegments = match.url.split("/")
    const selectedRace = races.find(race => race.raceLocatorId === urlSegments[urlSegments.length - 1])
    const race_date_date = new Date(selectedRace.race_date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const rankPercent = rawValue => (rawValue * 100.00).toFixed(2)

    return (
        <div>
            <div>
                <h3>{selectedRace.name}<br/>
                    <span className="race-instance-subdetail">
                        {race_date_date.toLocaleDateString('en-US',options)}
                        {selectedRace.url ? " | " : ""}
                        {selectedRace.url ? <a href={selectedRace.url} target="blank">Race website</a> : ""}
                    </span>
                </h3>
            </div>
            <div>
                <h3 className="section-title">Race</h3>
                <div className="section-container">
                    <div> 
                        <span className="section-subtitle">Time</span>
                        <span className="section-super">{selectedRace.elapsed_time}</span><br/>
                        <span className="section-subdetail">Gun time: {selectedRace.gun_time}</span>
                    </div>
                    <div>
                        <span className="section-subtitle">Pace min/mi</span>
                        <span className="section-super">{selectedRace.pace_miles}</span><br/>
                        <span className="section-subdetail">Pace min/km: {selectedRace.pace_kilometers}</span>
                    </div>
                    <div>
                        <span className="section-subtitle">Bib Number</span>
                        <span className="section-super">{selectedRace.bib_nbr}</span>
                    </div>
                    <div>
                        <span className="section-subtitle">Age</span>
                        <span className="section-super">{selectedRace.age}</span>
                    </div>
                    <div>
                        <span className="section-subtitle">Division</span>
                        <span className="section-super">{selectedRace.division_name}</span>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="section-title">Ranking</h3>
                <div className="section-container">
                    <div>
                        <span className="section-subtitle">Overall</span>
                        <span className="section-super">{selectedRace.overall_place}</span><span className="section-detail">/{selectedRace.overall_finishers}</span><br/>
                        <span className="section-subdetail">Overall rank: {rankPercent(selectedRace.overall_rank)}%</span>
                    </div>
                    <div>
                        <span className="section-subtitle">Gender</span>
                        <span className="section-super">{selectedRace.gender_place}</span><span className="section-detail">/{selectedRace.gender_finishers}</span><br/>
                        <span className="section-subdetail">Gender rank: {rankPercent(selectedRace.gender_rank)}%</span>                      
                    </div>
                    <div>
                        <span className="section-subtitle">Division</span>
                        <span className="section-super">{selectedRace.division_place}</span><span className="section-detail">/{selectedRace.division_finishers}</span><br/>
                        <span className="section-subdetail">Division rank: {rankPercent(selectedRace.division_rank)}%</span>   
                    </div>
                </div>
            </div>
            <div>
                <h3 className="section-title">Results</h3>
                <div className="section-detail">
                    <a href={selectedRace.results_url} target="_blank" rel="noreferrer">{selectedRace.results_url}</a>
                </div>
            </div>
            <div>
                <h3 className="section-title">Race Notes</h3>
                <div className="section-detail">
                    {selectedRace.race_notes}
                </div>
            </div>
            <div>
                <p className="section-footer">
                    Return to <a href="/races">Races</a>
                </p>
            </div>
        </div>
    )
}

export default RaceInstanceDetail