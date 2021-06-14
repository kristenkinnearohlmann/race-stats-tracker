import React from 'react'
import { Route } from 'react-router-dom'
import Race from './Race'
import './RaceList.css'

const RaceList = ({ races, results }) => {

    if (races.length === 0 && results === false) {
        return <p>Select a race distance from the list to see your races.</p>
    } else if (races.length === 0 && results === true) {
        return <p>No results found for this distance.</p>
    } else {

        // lastchange - below is original
        // const generateRaces = races.map((race, index) => {
        //     const uniqRace = `${race.id}-${index}` 
        //     return (
        //         <Race key={uniqRace} race={race} />
        //     )
        // })

        // return (
        //     <div className="race-list-wrapper">
        //         {generateRaces}
        //     </div>
        // )
        
        // lastchange - needed?


        // const generateRaces = races.map((race, index) => {
        //     const uniqRace = `${race.id}-${index}` 
        //     return (
        //         <Race key={uniqRace} race={race} />
        //     )
        // })

        // return (
        //     <div className="race-list-wrapper">
        //         <Route exact path={match.url} render={() => generateRaces} />

        //     </div>
        // )

        // lastchange - trial 2

        const generateRaces = races.map((race, index) => {
            const uniqRace = `${race.id}-${index}` 
            return (
                <Route path="/races" render={routerProps => <Race {...routerProps} key={uniqRace} race={race} />} />
            )
        })

        return (
            <div className="race-list-wrapper">
                {generateRaces}
            </div>
        )
    }
}

export default RaceList
