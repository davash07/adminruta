var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var eventSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	type: {
		type: String
	},
	image: {
		type: String
	},
	city: {
        city_id: Schema.Types.ObjectId,
        name: String
    },
	createdAt: {
		type: Date,
		default: Date.now
	}
});


module.exports = mongoose.model('Event', eventSchema);

