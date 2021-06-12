import { React, Component } from 'react'
import { connect } from 'react-redux'
import { fetchRaceDistances } from '../actions/racesActions'
import RaceDistanceDropdown from '../components/RaceDistanceDropdown'

class Races extends Component {

    componentDidMount() {
        this.props.fetchRaceDistances()
    }
    
    render() {
        return (
            <div>
                <RaceDistanceDropdown raceDistances={this.props.raceDistances} />
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
        fetchRaceDistances: () => dispatch(fetchRaceDistances())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Races)