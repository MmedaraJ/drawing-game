const UserController = require('../controllers/user.controller');

module.exports = function(app){
    app.get('/user', UserController.index);
}
