import { React, Component } from 'react'
import { connect } from 'react-redux'
import { fetchRaceDistances } from '../actions/racesActions'
import './RaceNew.css'

class RaceNew extends Component {

    state = {
        name: '',
        raceDistances: 0
    }

    componentDidMount() {
        this.props.fetchRaceDistances()
        console.log("Distances are back...update local state??")
        console.log(this.props.raceDistances)
    }

    render() {
        return (
            <div className="race-new-wrapper">
                <p>Add a race to your race list</p>
                <form>
                    <p>
                        <label>Race name: </label><br/>
                        <input type="text" name="name" value={this.state.name} />
                    </p>
                    <p>
                        <label>Select race distance: </label><br/>
                        <select name="raceDistances" id="raceDistances">
                            <option value=""></option>
                            <option value="0">All</option>
                            {this.props.raceDistances.map(distance => {
                                return (
                                    <option key={distance.id} value={distance.id}>{distance.distance_type}</option>
                                )
                            })}
                        </select>
                    </p>
                </form>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RaceNew)