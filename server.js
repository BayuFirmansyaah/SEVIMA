const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const config_session = require('./app/config/session');
const app = express();
const port = process.env.PORT || 3000;


// configuration
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join( __dirname, '/public/assets')))

// session
app.use(session(config_session));

// ejs engine
app.set('views', path.join( __dirname, 'app/views'));
app.set('view engine', 'ejs');


// routes here
const homeRouter = require('./app/routes/home');
const adminRouter = require('./app/routes/admin');
const accountRouter = require('./app/routes/account');


// use router
app.use('/', homeRouter);
app.use('/admin', adminRouter);
app.use('/account', accountRouter);

// page not found
app.use((req, res, next) => {
    res.send(404);
})


// runing server
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})