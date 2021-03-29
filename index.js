const env = process.env.NODE_ENV || 'development';

const mongoose = require('mongoose');
const config = require('./config/config')[env];
const indexRouter = require('./routes');
const express = require('express'); // const app = require('express')()
const app = express();


require('./config/express')(app);
app.use('/', indexRouter);

mongoose.connect(config.databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.error(err);
        throw err;
    }

    console.log('Database is set up and running');
})

app.listen(config.port,
    console.log(`Listening on port ${config.port}! Now its up to you...`));