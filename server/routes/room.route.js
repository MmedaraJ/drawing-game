const RoomController = require('../controllers/room.controller');

module.exports = function(app){
    app.get('/room', RoomController.index);
}
