import React from 'react'

const RaceCarnitas = ({ match, races }) => {
    console.log('RACE CARNITAS')
    const urlSegments = match.url.split("/")
    console.log(urlSegments[urlSegments.length - 1])
    races.forEach(race => {
        console.log(race.raceLocatorId)
    })

    

    return (
        <div>
            <p>
                After races, people like pork<br/>
                {match.url}<br/>
            </p>
        </div>
    )
}

export default RaceCarnitas