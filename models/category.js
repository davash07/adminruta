/**
 * Created by devios on 17/02/17.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    title: {
        type: String,
        required : true
    },
    image: {
        type: String
    },
    description: {
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

module.exports = mongoose.model('Category', categorySchema);
