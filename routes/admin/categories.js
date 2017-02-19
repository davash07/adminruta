module.exports  = function (router) {
    var categoryController = require('../../controllers/admin/categories_controller');
    var sessions_helper = require('../../helpers/sessions_helper');

    // router.all("/categories/", sessions_helper.ensureAuthenticated);
    router.get("/categories", categoryController.index);
    router.post("/categories", categoryController.create);
    router.get("/categories/:id/edit", categoryController.edit);
    router.put("/categories/:id", categoryController.update);
    router.get("/categories/:id", categoryController.show);

};
