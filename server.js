// require dependencies
const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');

// set up port to be either the host's port or 3000
const PORT = process.env.PORT || 3000;

// init express app
const app = express();

// set up express router
const router = express.Router();

// require routes file to pass our router object
require('./config/routes')(router);

// designate our public folder as a static directory
app.use(express.static(__dirname + '/public'));

// connect handlebars to our express app
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');

// set body-parser up
app.use(bodyParser.urlencoded({
    extended: false
}));

// have every request go through the router middleware
app.use(router);

// if deployed use the deployed database. Other wise use the local mongoDB
// var db = process.env.MONGODB_URI || "mongodb://localhost:27017/nxtsec_db"

// connect mongoose to db
// mongoose.connect(db, (error) => {
//     //log any error connection w/ mongoose
//     if (error) {
//         console.log(error);
//     } else {
//         //log success msg
//         console.log('mongoose connection succsesful');
//     }
// });

// app.get('/', (req, res) => res.send('Hello, World!'));

app.listen(PORT, () => console.log(`App Listening on port ${PORT}!`));