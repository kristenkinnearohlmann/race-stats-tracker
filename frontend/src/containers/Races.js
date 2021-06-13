import { React, Component } from 'react'
import { connect } from 'react-redux'
import { fetchRaceDistances, fetchRacesByDistance, clearRaces } from '../actions/racesActions'
import RaceDistanceDropdown from '../components/RaceDistanceDropdown'
import RaceList from '../components/RaceList'
import './Races.css'

class Races extends Component {

    componentDidMount() {
        this.props.fetchRaceDistances()
    }

    componentWillUnmount() {
        this.props.clearRaces()
    }
    
    render() {
        return (
            <div className="races-wrapper">
                <RaceDistanceDropdown raceDistances={this.props.raceDistances} currentUserId={this.props.currentUserId} fetchRacesByDistance={this.props.fetchRacesByDistance} />
                <RaceList races={this.props.races} results={this.props.results} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        raceDistances: state.race_distances,
        loading: state.loading,
        races: state.races,
        currentUserId: state.current_user.id,
        results: state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRaceDistances: () => dispatch(fetchRaceDistances()),
        fetchRacesByDistance: raceSearchParms => dispatch(fetchRacesByDistance(raceSearchParms)),
        clearRaces: () => dispatch(clearRaces())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Races)