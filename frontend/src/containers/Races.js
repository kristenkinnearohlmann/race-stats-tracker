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
                <p>
                    <RaceDistanceDropdown />
                    TBD: Race info
                </p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        race_distances: state.race_distances,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRaceDistances: () => dispatch(fetchRaceDistances())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Races)