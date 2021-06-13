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
                <RaceDistanceDropdown raceDistances={this.props.raceDistances} currentUserId={this.props.currentUserId} fetchRacesByDistance={this.props.fetchRacesByDistance} />
                <RaceList races={this.props.races} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        raceDistances: state.race_distances,
        loading: state.loading,
        races: state.races,
        currentUserId: state.current_user.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRaceDistances: () => dispatch(fetchRaceDistances()),
        fetchRacesByDistance: (raceDistanceId, currentUserId) => dispatch(fetchRacesByDistance(raceDistanceId, currentUserId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Races)