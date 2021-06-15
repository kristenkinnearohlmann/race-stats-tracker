import React from 'react'
import './RaceInstanceDetail.css'

const RaceInstanceDetail = ({ match, races }) => {
    const urlSegments = match.url.split("/")
    const selectedRace = races.find(race => race.raceLocatorId === urlSegments[urlSegments.length - 1])
    const race_date_date = new Date(selectedRace.race_date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

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
                <div className="section-container"> {/* flex */}
                    <div> 
                        elapsed_time/gun_time
                    </div>
                    <div>
                        pace_miles/pace_kilometers
                    </div>
                </div>
                <div className="section-container"> {/* flex */}
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
                <div className="section-container"> {/* flex */}
                    <div>
                        <span>Overall</span><br/>
                        <span>overall_place</span>/overall_finishers<br/>
                        <span>overall_rank</span>
                    </div>
                    <div>
                        <span>Gender</span><br/>
                        <span>gender_place</span>/gender_finishers<br/>
                        <span>gender_rank</span>                        
                    </div>
                    <div>
                        <span>Division</span><br/>
                        <span>division_place</span>/division_finishers<br/>
                        <span>division_rank</span>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="section-title">Race Notes</h3>
                <div className="section-detail">
                    {selectedRace.race_notes}
                </div>
            </div>
            <div>
                <p>
                    Return to <a href="/races">Races</a>
                </p>
            </div>
        </div>
    )
}

export default RaceInstanceDetail