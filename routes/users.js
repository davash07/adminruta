module.exports  = function (router) {
    var userController = require('../controllers/users_controller');
    var sessions_helper = require('../helpers/sessions_helper');
    router.all("/profile", sessions_helper.ensureAuthenticated);
    router.get("/profile/:id", userController.show);
    router.get("/profile/:id/", userController.edit);
    router.get("/profile/:id/", userController.update);

};

