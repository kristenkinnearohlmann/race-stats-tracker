import React from 'react'
import { Route } from 'react-router-dom'
import RaceInstance from './RaceInstance'

const Race = ({ match, race }) => {
    // const generateRaceInstances = race.user_races.map((ur,index) => {
    //     const uniqRaceUr = `race-${index}${race.id}${ur.id}`

    //     return (
    //         <div key={uniqRaceUr}>
    //             <RaceInstance key={uniqRaceUr} name={race.name} url={race.url} race={ur} />
    //         </div>
            
    //     )
    // })

    // return (
    //     <div className="race-wrapper">
    //         {generateRaceInstances}
    //         {/* {race.user_races.map((ur,index) => {
    //             const uniqRaceUr = `race-${index}${race.id}${ur.id}`

    //             return (
    //                 <div key={uniqRaceUr}>
    //                     <RaceInstance key={uniqRaceUr} name={race.name} url={race.url} race={ur} />
    //                 </div>
                    
    //             )
    //         })} */}
    //     </div>
    // )

    // lastchange
    console.log(match)
    const generateRaceInstances = race.user_races.map((ur,index) => {
        const uniqRaceUr = `race-${index}${race.id}${ur.id}`

        return (
            <div key={uniqRaceUr}>
                <Route exact path={match.url} render={() => <RaceInstance key={uniqRaceUr} uniqueId={uniqRaceUr} name={race.name} url={race.url} race={ur} />} />
                <Route path={`${match.url}/:uniqRaceUr`} render={routerProps => <RaceInstance {...routerProps} key={uniqRaceUr} uniqueId={uniqRaceUr} name={race.name} url={race.url} race={ur} />} />
            </div>
        )
    })

    return (
        <div className="race-wrapper">
            {generateRaceInstances}
        </div>
    )
}

export default Race