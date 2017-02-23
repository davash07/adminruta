/**
 * Created by devios on 23/01/17.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var citySchema = new Schema({
    name: {
        type: String,
        required : true
    },
    image_id: {
        type: String
    },
    image: {
        type: String
    },
    // description: {
    //     type: String,
    //     required: true
    // },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('City', citySchema);
