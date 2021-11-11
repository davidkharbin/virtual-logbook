const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pilotSchema = new Schema({
	pilotname: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength:3
	},
}, {
	timestamps: true,
});

const Pilot = mongoose.model('Pilot', pilotSchema);

module.exports = Pilot;
