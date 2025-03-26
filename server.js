const express = require('express');
const app = express();
const cors = require('cors') 
const port = 8000;
app.use(cors())

require('./server/routes/user.route')(app);
require('./server/routes/guess.route')(app);
require('./server/routes/user_room_score.route')(app);

    
app.listen(port, () => console.log(`Listening on port: ${port}`) );