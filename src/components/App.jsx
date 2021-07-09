import React from 'react';
import { Button } from 'react-bootstrap';

import Navbar from "./Navbar.jsx"
import FlightsList from "./FlightsList.jsx";
import EditFlight from "./EditFlight.jsx";
import CreateFlight from "./CreateFlight.jsx";
import CreatePilot from "./CreatePilot.jsx";

function App() {
	return (
		<Router>
			<div className="container">
				<Navbar />
				<br />
				<Route path="/" exact component={FlightsList} />
				<Route path="/edit/:id" component={EditFlight} />
				<Route path="/create" component={CreateFlight} />
				<Route path="/user" component={CreatePilot} />
			</div>
		</Router>
	)
};

export default App;
