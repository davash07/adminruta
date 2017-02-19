/**
 * Created by devios on 19/02/17.
 */
var CityModel = require('../../models/city');

function index (req, res) {
    CityModel.find()
        .sort({createdAt: "descending"})
        .exec(function (err, cities) {
            if(err){
                return next(err);
            }
            res.render("admin/cities/index", {cities : cities});
        });
}

function create(req, res) {
    console.log('POST - /City');
    var city = new CityModel();
    city.name = req.body.name;
    // city.type = req.body.type;
    city.image = req.body.image;
    // city.description = req.body.description;
    city.save(function(err) {
        if(!err) {
            return res.redirect("/admin/cities");
        } else {
            console.log(err);
            if(err.name == 'ValidationError') {
                res.statusCode = 400;
                res.send({ error: 'Validation error' });
            } else {
                res.statusCode = 500;
                res.send({ error: 'Server error' });
            }
            console.log('Internal error(%d): %s',res.statusCode,err.message);
        }
    });
}

function show(req, res, next) {

}

function edit(req, res) {
    CityModel.findOne({_id: req.params.id}, function(err, cities) {
        console.log("Edit / cities");
        res.render("admin/cities/", {cities: cities});
    });
}
function update(req, res, next) {
    CityModel.update({_id: req.params.id}, {$set: {
        name :req.body.name,
        // type : req.body.type,
        image : req.body.image,
        // description : req.body.description
    } }, function(err) {
        if(err) {
            console.log("Update Error:", err);
        }
        else {
            res.redirect("/admin/cities/");
        }

    });
}

exports.index = index;
exports.create = create;
exports.show = show;
exports.edit = edit;
exports.update = update;
