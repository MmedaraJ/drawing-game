const GuessController = require('../controllers/guess.controller');

module.exports = function(app){
    app.get('/guess', GuessController.index);
}
