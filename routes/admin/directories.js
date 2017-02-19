/**
 * Created by devios on 19/02/17.
 */
module.exports  = function (router) {
    var directoryController = require('../../controllers/admin/directories_controller');
    var sessions_helper = require('../../helpers/sessions_helper');
    // router.all("/categories/", sessions_helper.ensureAuthenticated);
    router.get("/directories", directoryController.index);
    router.post("/directories", directoryController.create);
    router.get("/directories/:id/edit", directoryController.edit);
    router.put("/directories/:id", directoryController.update);
    router.get("/directories/:id", directoryController.show);

};