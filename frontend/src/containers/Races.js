import { React, Component } from 'react'
import { connect } from 'react-redux'
import { fetchRaceDistances, fetchRacesByDistance } from '../actions/racesActions'
import RaceDistanceDropdown from '../components/RaceDistanceDropdown'
import RaceList from '../components/RaceList'
import './Races.css'

class Races extends Component {

    componentDidMount() {
        this.props.fetchRaceDistances()
    }
    
    render() {
        return (
            <div className="races-wrapper">
                <RaceDistanceDropdown raceDistances={this.props.raceDistances} fetchRacesByDistance={this.props.fetchRacesByDistance} />
                <RaceList />
                <p>
                    TBD: Race info
                </p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        raceDistances: state.race_distances,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRaceDistances: () => dispatch(fetchRaceDistances()),
        fetchRacesByDistance: raceDistanceId => dispatch(fetchRacesByDistance(raceDistanceId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Races)