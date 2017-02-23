/**
 * Created by devios on 22/02/17.
 */
var CityModel = require('../../models/city');

// function show(req, res) {
//     UserModel.findOne({_id: req.params.id}, function(err, user) {
//         OkrModel.findOne({user_id: req.user._id}, function (err, okr) {
//             res.render("profile/index", {user: user, okr:okr});
//         });
//     });
// }

// function edit(req, res) {
//     UserModel.findOne({_id: req.user._id}, function(err, user) {
//         console.log("Edit2");
//         res.render("profile/edit", {user: user});
//     });
// }
function index(req, res) {
    CityModel.find()
        .sort({createdAt: "descending"})
        .exec(function (err, cities) {
            if (err) {
                return next(err);
            }
            res.render("site/index", {cities: cities});
        });
}

exports.index = index;
