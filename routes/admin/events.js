/**
 * Created by devios on 19/02/17.
 */
module.exports  = function (router) {
    var eventController = require('../../controllers/admin/events_controller');
    var sessions_helper = require('../../helpers/sessions_helper');
    // router.all("/categories/", sessions_helper.ensureAuthenticated);
    router.get("/events", eventController.index);
    router.post("/events", eventController.create);
    router.get("/events/:id/edit", eventController.edit);
    router.put("/events/:id", eventController.update);
    router.get("/events/:id", eventController.show);

};