import { React, Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchRaceDistances, fetchRacesByDistance, clearRaces } from '../actions/racesActions'
import RaceDistanceDropdown from '../components/RaceDistanceDropdown'
import RaceList from '../components/RaceList'
import Graph from '../components/Graph'
import './Containers.css'

class Races extends Component {

    componentDidMount() {
        this.props.fetchRaceDistances()
    }

    componentWillUnmount() {
        this.props.clearRaces()
    }
    
    render() {
        return (
            <div className="content-wrapper">
                <RaceDistanceDropdown raceDistances={this.props.raceDistances} distanceChoice={this.props.distanceChoice} currentUserId={this.props.currentUserId} fetchRacesByDistance={this.props.fetchRacesByDistance} />
                <Graph />
                <Route path="/races" render={routerProps => <RaceList {...routerProps} races={this.props.races} results={this.props.results} loading={this.props.loading} />} />
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
        results: state.results,
        distanceChoice: state.distance_choice
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