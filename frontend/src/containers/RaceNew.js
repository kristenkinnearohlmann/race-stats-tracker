import { React, Component } from 'react'
import { connect } from 'react-redux'
import { fetchRaceDistances, addNewRace } from '../actions/racesActions'
import './Containers.css'

class RaceNew extends Component {

    state = {
        current_user_id: this.props.currentUser.id,
        name: '',
        url: '',
        race_distance_id: -1,
        race_date: '',
        elapsed_time: '',
        gun_time: '',
        results_url: '',
        bib_nbr: '',
        division_name: '',
        overall_place: '',
        overall_finishers: '',
        gender_place: '',
        gender_finishers: '',
        division_place: '',
        division_finishers: '',
        race_notes: ''
    }

    componentDidMount() {
        this.props.fetchRaceDistances()
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addNewRace(this.state)
    }

    render() {
        return (
            <div className="content-wrapper">
                <p>Add a race to your race list</p>
                <form className="race-new-form" onSubmit={this.handleSubmit}>
                    <p>
                        <label>Distance</label><br/>
                        <select name="race_distance_id" id="race_distance_id" value={this.state.race_distance_id} onChange={this.handleOnChange}>
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
                        <label>Event name</label><br/>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} />
                    </p>
                    <p>
                        <label>Event URL</label><br/>
                        <input type="text" name="url" value={this.state.url} onChange={this.handleOnChange} />
                    </p>
                    <p>
                        <label>Event date</label><br/>
                        <input type="date" name="race_date" id="race_date" value={this.state.race_date} onChange={this.handleOnChange} />
                    </p>
                    <p>
                        <label>Elapsed time</label><br/>
                        <input type="text" name="elapsed_time" id="elapsed_time" placeholder="00:00:00" value={this.state.elapsed_time} onChange={this.handleOnChange} />
                    </p>
                    <p>
                        <label>Gun time</label><br/>
                        <input type="text" name="gun_time" id="gun_time" placeholder="00:00:00" value={this.state.gun_time} onChange={this.handleOnChange} />
                    </p>
                    <p>
                        <label>Results URL</label><br/>
                        <input type="url" name="results_url" id="results_url" value={this.state.results_url} onChange={this.handleOnChange} />
                    </p>
                    <p>
                        <label>Bib number</label><br/>
                        <input type="text" name="bib_nbr" id="bib_nbr" value={this.state.bib_nbr} onChange={this.handleOnChange} />
                    </p>
                    <p>
                        <label>Division name</label><br/>
                        <input type="text" name="division_name" id="division_name" value={this.state.division_name} onChange={this.handleOnChange} />
                    </p>
                    <p>
                        <label>Overall place and finishers</label><br/>
                        <input type="number" name="overall_place" id="overall_place" value={this.state.overall_place} onChange={this.handleOnChange} />
                        <input type="number" name="overall_finishers" id="overall_finishers" value={this.state.overall_finishers} onChange={this.handleOnChange} />
                    </p>
                    <p>
                        <label>Gender place and finishers</label><br/>
                        <input type="number" name="gender_place" id="gender_place" value={this.state.gender_place} onChange={this.handleOnChange} />
                        <input type="number" name="gender_finishers" id="gender_finishers" value={this.state.gender_finishers} onChange={this.handleOnChange} />
                    </p>
                    <p>
                        <label>Division place and finishers</label><br/>
                        <input type="number" name="division_place" id="division_place" value={this.state.division_place} onChange={this.handleOnChange} />
                        <input type="number" name="division_finishers" id="division_finishers" value={this.state.division_finishers} onChange={this.handleOnChange} />
                    </p>
                    <p>
                        <label>Race notes</label><br/>
                        <textarea name="race_notes" id="race_notes" value={this.state.race_notes} onChange={this.handleOnChange} />
                    </p>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.current_user,
        raceDistances: state.race_distances,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRaceDistances: () => dispatch(fetchRaceDistances()),
        addNewRace: raceObject => dispatch(addNewRace(raceObject))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RaceNew)