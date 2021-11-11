import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Flight from './Flight.jsx'

const FlightsList = () => {
  const [flights, setFlights] = useState([])

  const getFlights = () => {
    axios.get('http://localhost:4000/flights/')
      .then(response => {
        setFlights(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    console.log('ran')
    getFlights()
  }, [])

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
          {flights.map(currentflight => {
            return <Flight flight={currentflight} key={currentflight._id} />
          })}
        </tbody>
      </table>
    </div>
  )
}

export default FlightsList
