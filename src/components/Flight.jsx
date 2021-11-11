import React, { Component } from 'react';

const Flight = ( props ) => {
	console.log(props)
	return (
		<tr>
			<td>{props.flight.pilotname}</td>
			<td>{props.flight.date.substring(0, 10)}</td>
			<td>{props.flight.duration}</td>
			<td>{props.flight.landings}</td>
			<td>{props.flight.departure_airport}</td>
			<td>{props.flight.remarks}</td>

		</tr>
	)

};

export default Flight
