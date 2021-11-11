import React, { Component } from 'react';
import axios from 'axios';

const Flight = props => (
  <tr>
    <td>{props.flight.pilotname}</td>
    <td>{props.flight.date.substring(0,10)}</td>
    <td>{props.flight.duration}</td>
    <td>{props.flight.landings}</td>
    <td>{props.flight.departure_airport}</td>
    <td>{props.flight.remarks}</td>

  </tr>
)

export default class FlightsList extends Component {
  constructor(props) {
    super(props);

    this.deleteFlight = this.deleteFlight.bind(this)

    this.state = {flights: []};
  }

  componentDidMount() {
    axios.get('http://localhost:4000/flights/')
      .then(response => {
        this.setState({ flights: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteFlight(id) {
    axios.delete('http://localhost:4000/flights/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      flights: this.state.flights.filter(el => el._id !== id)
    })
  }

  flightList() {
    return this.state.flights.map(currentflight => {
      return <Flight flight={currentflight} deleteFlight={this.deleteFlight} key={currentflight._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Flights</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Pilot name</th>
              <th>Date</th>
              <th>Duration</th>
              <th>Landings</th>
              <th>Departure Airport</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            { this.flightList() }
          </tbody>
        </table>
      </div>
    )
  }
}





// {
//     "pilotname": "test",
//     "date" : "2021-07-11T17:21:25.011+00:00",
//     "duration": 120,
//     "landings": 10,
//     "departure_airport": "KARR",
//     "remarks": "Touch and go's"
// }