var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var directorySchema = new Schema({
	id_city: {
        id_city: Schema.Types.ObjectId
        // name: String
	},
	id_category:{
        id_category: Schema.Types.ObjectId
        // name: String
	},
	title: {
		type: String
	},
    link_google_maps: {
		type: String
	},
    link_youtube: {
		type: String
	},
	image: {
		type: String
	},
	description: {
		type: String
	},
	phone: {
		type : String
	},
	address:{
		type: String
	},
	status: {
        type: Boolean,
        default: true
    },
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Directory', directorySchema);
