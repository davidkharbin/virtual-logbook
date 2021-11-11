import React from 'react';
import { Button } from 'react-bootstrap';

import Navbar from "./Navbar.jsx"
import FlightsList from "./FlightsList.jsx";
import EditFlight from "./EditFlight.jsx";
import CreateFlight from "./CreateFlight.jsx";
import CreatePilot from "./CreatePilot.jsx";

function App() {
	return (
		<div>
			<div className="container">
				<FlightsList />
			</div>
		</div>
	)
};

export default App;
