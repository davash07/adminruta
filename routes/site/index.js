/**
 * Created by devios on 22/02/17.
 */
module.exports  = function (router) {
    var indexController = require('../../controllers/site/index');

    router.get("/", indexController.index);
};