const router = require('express').Router();
let Pilot = require('../models/pilot.model');

router.route('/').get((req, res) => {
	Pilot.find()
	.then(pilots => res.json(pilots))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const pilotname = req.body.pilotname;

	const newPilot = new Pilot({ pilotname });

	newPilot.save()
	.then(() => res.json('Pilot added!'))
	.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;