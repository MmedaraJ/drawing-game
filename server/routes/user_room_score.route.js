const UserRoomScoreController = require('../controllers/user_room_score.controller');

module.exports = function(app){
    app.get('/user_room_score', UserRoomScoreController.index);
}
