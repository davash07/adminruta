/**
 * Created by devios on 19/02/17.
 */
var EventModel = require('../../models/event');
var CityModel = require('../../models/city');

function index(req, res, next) {
    EventModel.find()
        .sort({createdAt: "descending"})
        .exec(function (err, events) {
            if (err) {
                return next(err);
            }
            CityModel.find()
                .sort({createdAt: "descending"})
                .exec(function (err, cities) {
                    if (err) {
                        return next(err);
                    }
                    res.render("admin/events/index", {events: events, cities: cities});
                });

        });
}

function create(req, res, next) {
    console.log('POST - /event');
    var event = new EventModel();
    event.title = req.body.title;
    event.type = req.body.type;
    event.image = req.body.image;
    event.city = req.body.city;
    event.save(function (err) {
        if (!err) {
            console.log(req.body);
            console.log(req.param);
            console.log("Event created");
            // CityModel.findOne({ _id: project.client_id }, function (err, doc){
            //     doc.projects.push({project_id: project._id, name: project.name});
            //     doc.save();
            // });
            return res.redirect("/admin/events");
        } else {
            next(err)
        }
    });
}

function show(req, res) {
    EventModel.findOne({_id: req.params.id}, function (err, events) {
        CityModel.find()
            .sort({createdAt: "descending"})
            .exec(function (err, cities) {
                if (err) {
                    return next(err);
                }
                res.render("admin/events/show", {events: events, cities: cities});
            });
        console.log("Show");
    });
}

function edit(req, res) {

    EventModel.findOne({_id: req.params.id}, function (err, events) {
        if (err) {
            return next(err);
        }
        CityModel.find()
            .sort({createdAt: "descending"})
            .exec(function (err, cities) {
                if (err) {
                    return next(err);
                }
                res.render("admin/events/edit", {events: events, cities: cities});
            });
    });
}

function update(req, res, next) {
    EventModel.update({_id: req.params.id}, {
        $set: {
            title: req.body.title,
            type: req.body.type,
            image: req.body.image,
            city: req.body.city
        }
    }, function (err) {
        if (err) {
            console.log("Update Error:", err);
        }
        doc.save();
        console.log("Update projects");
        res.redirect("/admin/events");
    });

}
function destroy(req, res) {
    EventModel.remove({_id: req.params.id}, function (err) {
        if (err) {
            console.log("Delete Error", err);
        }
        else {
            console.log("Evento deleted!");
            res.redirect("/admin/events");
        }
    });
}

exports.index = index;
exports.create = create;
exports.show = show;
exports.edit = edit;
exports.destroy = destroy;
exports.update = update;