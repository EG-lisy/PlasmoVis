// DEV: run server using: npm start from project directory("start": "nodemon app.js" set on json file)

/* HTML files have been converted into EJS files (Embedded JavaScript templating) - easier to render
 EJS is a simple templating language that lets you generate HTML markup with plain JavaScript */

'use strict'  // code executes in strict mode: udeclared variables are not allowed

// Imports
const express = require('express');
const router = require('./router'); // json outputs
const app = express();
const port = 3000;

//=============================== provide a connect/express middlewhere
const cors = require('cors');
app.use(cors());
//===========================================================================

//START (not used)
//import mongoose //NOT USED
const mongoose = require('mongoose'); //mongoose obj to connect to the db
//import model
const Metadata = require('./models/data');
const { prototype } = require('events');

//DATABASE (MongoDB) //NOT USED
const mongodb = "mongodb+srv://lisy:test1234@cluster0.lzzno.mongodb.net/plasmo-vis?retryWrites=true&w=majority"; //connect to DB - plasmo-vis (collection=user)
//asyncronic task: will take some time (check console)
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true }) //connect, second arg to stop deprecation warning
    .then((result) => console.log('Succesfully connected to DB!\nVisit Home Page: http://localhost:' + port +
        '\n\n--------------------------------METADATA--------------------------------\n' +
        'Locations: http://localhost:3000/api/locations'))
    //catch error
    .catch((err) => console.log(err));
// we want server to listen to requests only after connection has been made, otherwise user will not be able to see data -> listen until the latter has been completed
//END===========================================================================

// check router js - metadata queries
app.use('/api', router);

// Access folders / Static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

//static data (e.g. localhost:3000/pk_data/filteredERR274221_bqsr.vcf.gz)
app.use('/pk_data', express.static(__dirname + 'public/pk_data'));

// app.get('/upload', function(req, res) {
//     res.sendfile('views/upload.txt');
//   });

//json directory
app.use(express.static('views'))
app.use('/json', express.static(__dirname + 'views/json'));


// Set Views
app.set('views', './views');
app.set('view engine', 'ejs')


//START (NOT USED)===========================================================================
//mongoose and sandbox routes
app.get('/add-metadata', (req, res) => {
    //import model from models/data.js (see above)
    const metadata = new Metadata({ //using model to create a new instance of Metadata doc
        sample: 'sample2',
        location: 'location of sample collection',
        group_pca: 'grouped id'
    });

    metadata.save() //to save metadata on DB using metadata model
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
});
//retrive data
app.get('/all-metadata', (req, res) => {
    Metadata.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
})

//retrive data - single
app.get('/single-metadata', (req, res) => {
    Metadata.findById('60ca21ed450c513761a0e4b2') //unique 
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
})
//END===========================================================================

app.use(express.urlencoded({ extended: false })) // take forms and build/access inside post
//Render page - main: login
app.get('', (req, res) => {
    res.render('index')
});

//===============================================
//Render page - main:register //NOT USED
app.get('/register', (req, res) => {
    res.render('register')
});
//Render page - main:login //NOT USED
app.get('/login', (req, res) => {
    res.render('login')
});
app.post('/login', (req, res) => {
});
//register post
app.post('/register', (req, res) => {
    req.body.name //requests from /register name 
});
//================================================

//Render page - index
app.get('/index', (req, res) => {
    res.render('index')
});

app.get('/data', (req, res) => {
    res.render('tablemetadata')
});

//Render page - help
app.get('/help', (req, res) => {
    res.render('help')
});
//Render page - browser
app.get('/browser', (req, res) => {
    res.render('browser')
});

//IGV
app.get('/igv', (req, res) => {
    res.render('igv')
});

//IGV
app.get('/tabletest', (req, res) => {
    res.render('tabletest')
});

// //Render page - browser
// app.get('/plasmodb', (req, res) => {
//     res.render('plasmodb')
// });

//render charts

app.get('/groupschart', (req, res) => {
    res.render('partials/chart_groups')
});
app.get('/locationschart', (req, res) => {
    res.render('partials/chart_locations')
});

//Render page - about
app.get('/about', (req, res) => {
    res.render('about')
});
//Render page - tabletest
app.get('/tabletest', (req, res) => {
    res.render('tabletest')
});

//table_metadata
app.get('/tablemetadata', (req, res) => {
    res.render('tablemetadata')
});

// Listen on port 3000
app.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port: ' +
            port + '\n\nPlease wait for DB connection...')
    }
});
