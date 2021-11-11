const router = require('express').Router();
const { deleteOne } = require('../models/pilot.model');
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

router.route('/delete').delete((req, res) => {
	const name = req.body.pilotname;
	console.log(req.body.pilotname);
	Pilot.deleteOne({pilotname: name})
	.then(() => res.json('Pilot deleted!'))
	.catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;