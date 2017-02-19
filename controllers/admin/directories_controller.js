/**
 * Created by devios on 19/02/17.
 */
var DirectoryModel = require('../../models/directory');
var CategoryModel = require('../../models/category');
var CityModel = require('../../models/city');
function index(req, res) {
    DirectoryModel.find()
        .sort({createdAt: "descending"})
        .exec(function (err, directories) {
            if (err) {
                return next(err);
            }
            CategoryModel.find()
                .sort({createdAt: "descending"})
                .exec(function (err, categories) {
                    if (err) {
                        return next(err);
                    }
                    CityModel.find()
                        .sort({createdAt: "descending"})
                        .exec(function (err, cities) {
                            if (err) {
                                return next(err);
                            }
                            res.render("admin/directories/index", {
                                directories: directories,
                                categories: categories,
                                cities: cities
                            });
                        })
                })
        });
}

function create(req, res) {
    var directory = new DirectoryModel();
    directory.title = req.body.title;
    directory.id_city = req.body.id_city;
    directory.id_category = req.body.id_category;
    directory.image = req.body.image;
    directory.link_google_maps = req.body.link_google_maps;
    directory.link_youtube = req.body.link_youtube;
    directory.description = req.body.description;
    directory.phone = req.body.phone;
    directory.address = req.body.address;
    directory.status = req.body.status;
    directory.save(function (err) {
        if (!err) {
            return res.redirect("/admin/directories");
        } else {
            console.log(err);
            if (err.name == 'ValidationError') {
                res.statusCode = 400;
                res.send({error: 'Validation error'});
            } else {
                res.statusCode = 500;
                res.send({error: 'Server error'});
            }
            console.log('Internal error(%d): %s', res.statusCode, err.message);
        }
    });
}

function show(req, res, next) {

}

function edit(req, res) {
    DirectoryModel.findOne({_id: req.params.id}, function (err, directories) {
        console.log("Edit / directories");
        res.render("admin/directories/", {directories: directories});
    });
}
function update(req, res, next) {
    DirectoryModel.update({_id: req.params.id}, {
        $set: {
            title: req.body.title,
            id_city: req.body.id_city,
            id_category: req.body.id_category,
            image: req.body.image,
            link_google_maps: req.body.link_google_maps,
            link_youtube: req.body.link_youtube,
            description: req.body.description,
            phone: req.body.phone,
            address: req.body.address,
            status: req.body.status
        }
    }, function (err) {
        if (err) {
            console.log("Update Error:", err);
        }
        else {
            res.redirect("/admin/directories/");
        }

    });
}

exports.index = index;
exports.create = create;
exports.show = show;
exports.edit = edit;
exports.update = update;
