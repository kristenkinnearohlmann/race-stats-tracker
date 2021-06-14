import React from 'react'
import { Route } from 'react-router-dom'
import Race from './Race'
import RaceInstanceDetail from './RaceInstanceDetail'
import './RaceList.css'

const RaceList = ({ match, races, results }) => {
    const racesWithUnqiueID = [];

    if (races.length >= 1) {
        races.forEach(race => {
            race.user_races.forEach((ur, index) => {
                racesWithUnqiueID.push({
                    name: race.name,
                    url: race.url,
                    raceLocatorId: `race-${index}${race.id}${ur.id}`,
                    ...ur
                })
            })
        })
    }

    const renderMain = () => {
        if (racesWithUnqiueID.length === 0)
        {
            return results ? <p className="main-msg">No results found for this distance.</p> : <p className="main-msg">Select a race distance from the list to see your races.</p>
        } else {
            return <Race races={racesWithUnqiueID} />
        }
    }

    return (
        <div className="race-list-wrapper">
            <Route exact path={match.url} render={() => renderMain()} />
            <Route path={match.url + '/:id'} render={routerProps => <RaceInstanceDetail {...routerProps} races={racesWithUnqiueID} />} />
        </div>
    )
}

export default RaceList
