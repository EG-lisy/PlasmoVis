// DEV note: run server using: npm start from project directory("start": "nodemon app.js" set on json file)
// Note 1: MongoDB code has been commented out
// Note 2:
// all HTML files have been converted into EJS files (Embedded JavaScript templating)

'use strict'  // code executes in strict mode: udeclared variables are not allowed

// Imports
const express = require('express');
const router = require('./router'); // json outputs
const app = express();
const port = 3000;

// provide a connect/express middlewhere
const cors = require('cors');
app.use(cors());

// // ===========================================================================
// MONGODB (not used)
// //import mongoose
// const mongoose = require('mongoose'); //mongoose obj to connect to the db
// //import model
// const Metadata = require('./models/data');
// const { prototype } = require('events');

// // NOTE: username and MongoDB password have bee deliberately changed!
// const mongodb = "mongodb+srv://USERNAME:PASSWORD@cluster0.lzzno.mongodb.net/plasmo-vis?retryWrites=true&w=majority"; //connect to DB - plasmo-vis (collection=user)

// //asyncronic task: will take some time (check console)
// mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true }) //connect, second arg to stop deprecation warning
//     .then((result) => console.log('Succesfully connected to DB!\nVisit Home Page: http://localhost:' + port +
//         '\n\n--------------------------------METADATA--------------------------------\n' +
//         'JQUERY eg: http://localhost:3000/api/locations'))
//     //catch error
//     .catch((err) => console.log(err));

// // we want server to listen to requests only after connection has been made, otherwise user will not be able to see data -> listen until the latter has been completed
// // ===========================================================================

app.use('/api', router); // check router js - metadata queries (PK)

// // ===========================================================================
// Access folders - serve static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/json', express.static(__dirname + 'public/json'));
app.use('/img', express.static(__dirname + 'public/img'));

//static data (e.g. http://localhost:3000/pk_data/filteredERR274221_bqsr.vcf.gz)
app.use('/pk_data', express.static(__dirname + 'public/pk_data'));

//static data (e.g. http://localhost:3000/pm_data/Pmalariae_fullgenome.fasta
app.use('/pm_data', express.static(__dirname + 'public/pm_data'));


// Set Views
app.set('views', './views');
app.set('view engine', 'ejs')
// // ===========================================================================

// // ===========================================================================
// //START (NOT USED)
// //mongoose and sandbox routes
// app.get('/add-metadata', (req, res) => {
//     //import model from models/data.js (see above)
//     const metadata = new Metadata({ //using model to create a new instance of Metadata doc
//         sample: 'sample2',
//         location: 'location of sample collection',
//         group_pca: 'grouped id'
//     });

//     metadata.save() //to save metadata on DB using metadata model
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });
// //retrive data
// app.get('/all-metadata', (req, res) => {
//     Metadata.find()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// //retrive data - single
// app.get('/single-metadata', (req, res) => {
//     Metadata.findById('60ca21ed450c513761a0e4b2') //unique 
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })
// // ===========================================================================

app.use(express.urlencoded({ extended: false })) // take forms and build/access inside post
//Render page - main: login
app.get('', (req, res) => {
    res.render('index')
});

// // ===========================================================================
//                              NOT USED - FUTURE WORK (WITH DB)
//Render page - main:register 
app.get('/register', (req, res) => {
    res.render('register')
});
//Render page - main:login 
app.get('/login', (req, res) => {
    res.render('login')
});
app.post('/login', (req, res) => {
});
//register post
app.post('/register', (req, res) => {
    req.body.name //requests from /register name 
});
// // ===========================================================================

// index
app.get('/index', (req, res) => {
    res.render('index')
});

// data PK
app.get('/data_pk', (req, res) => {
    res.render('data_pk')
});

// data PK
app.get('/data_pm', (req, res) => {
    res.render('data_pm')
});

// HELP --- NOT USED
app.get('/help', (req, res) => {
    res.render('help')
});

// // ===========================================================================
// IGV routes
// Note: first 3. display (possible) erroneous tracks (Pk and Pm)
// Please refer TO 4. ONWARDS

//1. PK (all samples)
app.get('/igv', (req, res) => {
    res.render('igv')
});

//2. PK (intersected)
app.get('/igv_Pk', (req, res) => {
    res.render('igv_groups_Pk')
});

//3. PM (intersected) - FILES RE-INTERSECTED NOT USING ISEC (see igv_pm80 igv_pm60 igv_pm20)
app.get('/igv_Pm', (req, res) => {
    res.render('igv_pm')
});

//4. PM  80% threshold
app.get('/igv_Pm80', (req, res) => {
    res.render('igv_pm80')
});
//5. PM  60% threshold
app.get('/igv_Pm60', (req, res) => {
    res.render('igv_pm60')
});
//6. PM  20% threshold
app.get('/igv_Pm20', (req, res) => {
    res.render('igv_pm20')
});

app.get('/map', (req, res) => {
    res.render('partials/map_PM.ejs')
});
// // ===========================================================================

// render charts - PK
app.get('/groupschart', (req, res) => {
    res.render('partials/chart_groups')
});
app.get('/vennchart', (req, res) => {
    res.render('partials/vennchart')
});

app.get('/locationschart', (req, res) => {
    res.render('partials/chart_locations')
});

// render charts - PM
app.get('/chart_PM_groups', (req, res) => {
    res.render('partials/chart_PM_groups')
});

app.get('/vennchartpm80', (req, res) => {
    res.render('partials/vennchartpm80')
});

app.get('/vennchartpm60', (req, res) => {
    res.render('partials/vennchartpm60')
});

app.get('/vennchartpm20', (req, res) => {
    res.render('partials/vennchartpm20')
});

// render about page
app.get('/about', (req, res) => {
    res.render('about')
});
// render tabletest page
app.get('/tabletest', (req, res) => {
    res.render('tabletest')
});

// render table_metadata page
app.get('/tablemetadata', (req, res) => {
    res.render('tablemetadata')
});

// SERVER 
app.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port: ' +
            port + '\n-------------------------------- PlasmoVis --------------------------------' +
            '\nWelcome to PlasmoVis!\n1. Open your browser of choice\n2. Visit: http://localhost:' + port)
    }
});
