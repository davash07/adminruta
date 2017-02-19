/**
 * Created by devios on 19/01/17.
 */
var CategoryModel = require('../../models/category');

function index (req, res) {
    CategoryModel.find()
        .sort({createdAt: "descending"})
        .exec(function (err, categories) {
            if(err){
                return next(err);
            }
            res.render("admin/categories/index", {categories : categories});
        });
}

function create(req, res) {
    console.log('POST - /categories');
    var category = new CategoryModel();
    category.title = req.body.title;
    category.image = req.body.image;
    category.description = req.body.description;
    category.status = req.body.status;
    category.save(function(err) {
        if(!err) {
            return res.redirect("/admin/categories");
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
    CategoryModel.findOne({_id: req.params.id}, function(err, categories) {
        res.render("admin/categories/edit", {categories: categories});
    });
}
function update(req, res, next) {
    CategoryModel.update({_id: req.params.id}, {$set: {
        title :req.body.title,
        image : req.body.image,
        description : req.body.description,
        status : req.body.status
    } }, function(err) {
        if(err) {
            console.log("Update Error:", err);
        }
        else {
            res.redirect("/admin/categories");
        }

    });
}

exports.index = index;
exports.create = create;
exports.show = show;
exports.edit = edit;
exports.update = update;
