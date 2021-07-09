const router = require('express').Router();
let Flight = require('../models/flight.model');

router.route('/').get((req, res) => {
	Flight.find()
	.then(flights => res.json(flights))
	.catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
	const pilotname = req.body.pilotname;
	const date = Date.parse(req.body.date);
	const duration = Number(req.body.duration);
	const landings = Number(req.body.landings);
	const departure_airport = req.body.departure_airport;
	const remarks = req.body.remarks;

	const newFlight = new Flight({
		pilotname,
		date,
		duration,
		landings,
		departure_airport,
		remarks,
	});

	newFlight.save()
	.then(() => res.json('Flight added!'))
	.catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;
