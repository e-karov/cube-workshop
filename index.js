const env = process.env.NODE_ENV || 'development';
require('dotenv').config();

const config = require('./config/config')[env];
const express = require('express'); 
const bodyParser = require('body-parser');

const app = express();
const indexRouter = require('./routes');
const mongoose = require('mongoose');

require('./config/express')(app);
app.use(bodyParser.urlencoded({extended: true}) );
app.use('/', indexRouter);

mongoose.connect(config.databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.error(err);
        throw err;
    }

    console.log('Connected to database');
})

app.listen(config.port,
    console.log(`Listening on port ${config.port}! Now its up to you...`));