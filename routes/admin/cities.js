/**
 * Created by devios on 19/02/17.
 */


module.exports  = function (router) {
    var cityController = require('../../controllers/admin/cities_controller');
    var sessions_helper = require('../../helpers/sessions_helper');
    var multipart = require('connect-multiparty');
    var multipartMiddleware = multipart();
    // router.all("/categories/", sessions_helper.ensureAuthenticated);
    router.get("/cities", cityController.index);
    router.post("/cities",  multipartMiddleware, cityController.create);
    router.get("/cities/:id/edit", cityController.edit);
    router.put("/cities/:id", cityController.update);
    router.get("/cities/:id", cityController.show);

};
