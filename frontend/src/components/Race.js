import React from 'react'
import RaceInstance from './RaceInstance'
import './Race.css'

const Race = ({ race }) => {
    return (
        <div className="race-wrapper">
                {/* {races.map(race => {
                    console.log(race)
                    console.log(
                        race.user_races.forEach(ur => {
                            console.log(race.name)
                            console.log(ur.race_date)
                        })
                    )
                    return (
                        <Race key={race.id} race={race} />
                    )
                })} */}
            <div>
                Race name, link to details
            </div>
            <div>
                Race top-line details
            </div>
            {/* {race.user_races.map(ur => {
                return (
                    <div className="race-wrapper">
                        <RaceInstance name={race.name} url={race.url} race={ur} />
                    </div>
                    
                )
            })} */}
        </div>
    )
}

export default Race