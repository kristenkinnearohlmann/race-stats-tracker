import { React, Component } from 'react'
import { connect } from 'react-redux'
import { fetchRaceDistances } from '../actions/racesActions'
import './RaceNew.css'

class RaceNew extends Component {

    state = {
        name: '',
        racedistance_id: -1,
        race_date: '',
        elapsed_time: ''
    }

    componentDidMount() {
        this.props.fetchRaceDistances()
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        },this.quick)
    }

    // DEL: remove this function the call to it from handleOnChange
    quick = () => {
        console.log(this.state)
    }

    // TODO: add handleOnSubmit

    render() {
        return (
            <div className="race-new-wrapper">
                <p>Add a race to your race list</p>
                <form className="race-new-form">
                    <p>
                        <label>Event name: </label><br/>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} />
                    </p>
                    <p>
                        <label>Distance:</label><br/>
                        <select name="racedistance_id" id="racedistance_id" value={this.state.racedistance_id} onChange={this.handleOnChange}>
                            <option value="-1"></option>
                            <option value="0">All</option>
                            {this.props.raceDistances.map(distance => {
                                return (
                                    <option key={distance.id} value={distance.id}>{distance.distance_type}</option>
                                )
                            })}
                        </select>
                    </p>
                    <p>
                        <label>Event date: </label><br/>
                        <input type="date" name="race_date" id="race_date" value={this.state.race_date} onChange={this.handleOnChange} />
                    </p>
                    <p>
                        <label>Elapsed time:</label><br/>
                        <input type="text" name="elapsed_time" id="elapsed_time" placeholder="00:00:00" value={this.state.elapsed_time} onChange={this.handleOnChange} />
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