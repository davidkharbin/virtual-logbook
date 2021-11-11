const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
	pilotname: { type: String, required: true },
	date: { type: Date, required: true },
	duration: { type: Number, required: true },
	landings: { type: Number, required: true },
	departure_airport: { type: String, required: true },
	remarks: { type: String, required: true }
}, {
	timestamps: true,
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;