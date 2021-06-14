import React from 'react'
import { Route } from 'react-router-dom'
import RaceInstance from './RaceInstance'
import RaceInstanceDetail from './RaceInstanceDetail'

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
    
    const user_races_local = race.user_races.map((ur, index) => {
        return {
            ...ur,
            name: race.name,
            url: race.url,
            uniqueId: `race-${index}${race.id}${ur.id}`
        }
    })

    // const generateRaceInstances = race.user_races.map((ur,index) => {
    //     const uniqRaceUr = `race-${index}${race.id}${ur.id}`

    //     return (
    //         <div key={uniqRaceUr}>
    //             {/* <Route exact path={match.url} render={() => <RaceInstance key={uniqRaceUr} uniqueId={uniqRaceUr} name={race.name} url={race.url} race={ur} />} /> */}
    //             {/* <Route path={`${match.url}/:uniqRaceUr`} render={routerProps => <RaceInstanceDetail {...routerProps} key={uniqRaceUr} uniqueId={uniqRaceUr} name={race.name} url={race.url} race={ur} />} /> */}
                
    //             <Route path="/races" render={routerProps => <RaceInstance {...routerProps} key={uniqRaceUr} uniqueId={uniqRaceUr} name={race.name} url={race.url} race={ur} />} />
    //         </div>
    //     )
    // })

    return (
        <div className="race-wrapper">
            {/* {generateRaceInstances} */}
            {/* {
                user_races_local.map(ur => {
                    return (
                        <div key={ur.uniqueId}>
                            <RaceInstance key={ur.uniqueId} race={ur} />
                        </div>
                    )
                })
            } */}
            <Route exact path={match.url} render={() => <p>All races</p>} />
            <Route path={`${match.url}/:uniqRaceUr`} render={() => <p>Specifc race</p>} />
        </div>
    )
}

export default Race