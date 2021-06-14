import React from 'react'
import { Route } from 'react-router-dom'
import Race from './Race'
import Carnitas from './Carnitas'
import RaceCarnitas from './RaceCarnitas'
import './RaceList.css'

const RaceList = ({ match, races, results }) => {
    // This is where stuff appears
    // This is where components should turn on and off
    // console.log(match)
    // console.log(races)

    // console.log('CHANGE SELECT')
    // if (races.length >= 1) {
    //     races.forEach(race => {
    //         race.user_races.forEach((ur, index) => {
    //             console.log({
    //                 name: race.name,
    //                 url: race.url,
    //                 uniqueID: `race-${index}${race.id}${ur.id}`,
    //                 ...ur
    //             })
    //         })
    //     })
    // }

    const racesWithUnqiueID = [];
    if (races.length >= 1) {
        races.map(race => {
            race.user_races.map((ur, index) => {
                racesWithUnqiueID.push({
                    name: race.name,
                    url: race.url,
                    raceLocatorId: `race-${index}${race.id}${ur.id}`,
                    ...ur
                })
            })
        })
    }

    console.log(racesWithUnqiueID)

    //race-022

    const renderFajitas = (
        <p>Fajitas</p>
    )

    const renderRace = match.url


    return (
        <div>
            <Route exact path={match.url} render={() => <p>Figuring</p>} />

            <Route path={match.url + '/:id'} render={routerProps => <RaceCarnitas {...routerProps} races={racesWithUnqiueID} />} />
            
            <Route path={match.url + '/carnitas'} component={Carnitas} />

            <Route path={match.url + '/fajitas'} render={() => renderFajitas} />

        </div>
    )
    // if (races.length === 0 && results === false) {
    //     return <p>Select a race distance from the list to see your races. <a href="http://localhost:3000/races/abc123">Test</a></p>
    // } else if (races.length === 0 && results === true) {
    //     return <p>No results found for this distance.</p>
    // } else {

    //     // lastchange - below is original
    //     // const generateRaces = races.map((race, index) => {
    //     //     const uniqRace = `${race.id}-${index}` 
    //     //     return (
    //     //         <Race key={uniqRace} race={race} />
    //     //     )
    //     // })

    //     // return (
    //     //     <div className="race-list-wrapper">
    //     //         {generateRaces}
    //     //     </div>
    //     // )
        
    //     // lastchange - needed?


    //     // const generateRaces = races.map((race, index) => {
    //     //     const uniqRace = `${race.id}-${index}` 
    //     //     return (
    //     //         <Race key={uniqRace} race={race} />
    //     //     )
    //     // })

    //     // return (
    //     //     <div className="race-list-wrapper">
    //     //         <Route exact path={match.url} render={() => generateRaces} />

    //     //     </div>
    //     // )

    //     // lastchange - trial 2

    //     const generateRaces = races.map((race, index) => {
    //         const uniqRace = `${race.id}-${index}` 
    //         return (
    //             <Route path="/races" render={routerProps => <Race {...routerProps} key={uniqRace} race={race} />} />
    //         )
    //     })

    //     return (
    //         <div className="race-list-wrapper">
    //             {generateRaces}
    //             <Route path={`${match.url}/:uniqRaceUr`} render={() => <p>Specific race</p>} />
    //         </div>
    //     )
    // }
}

export default RaceList
