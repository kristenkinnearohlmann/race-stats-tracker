import { React, Component } from 'react'
import { connect } from 'react-redux'
import { fetchRaceDistances } from '../actions/racesActions'
import './RaceNew.css'

class RaceNew extends Component {

    state = {
        name: '',
        race_distance: -1
    }

    componentDidMount() {
        this.props.fetchRaceDistances()
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="race-new-wrapper">
                <p>Add a race to your race list</p>
                <form className="race-new-form">
                    <p>
                        <label>Race name: </label><br/>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} />
                    </p>
                    <p>
                        <label>Race distance: </label><br/>
                        <select name="race_distance" id="race_distance" value={this.state.race_distance} onChange={this.handleOnChange}>
                            <option value="-1"></option>
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