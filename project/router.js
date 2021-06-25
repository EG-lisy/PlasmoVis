const express = require('express'); // Microsoft SQL Server Express (relational database management system) 
const sqlite3 = require('sqlite3').verbose(); // npm install sqlite3@5.0.0 --save

const metadata_router = express.Router(); // set router 
const db = new sqlite3.Database('test.sqlite');  // database path

metadata_router.use(function (req, res, next) {
    console.log('Received request');
    next();
});

metadata_router.get('/locations', function (req, res) {
    const query = 'SELECT sample_id, location, COUNT(location) AS tot_samples FROM metadata GROUP BY location;';
    db.all(query, [], function (err, rows) {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

//maybe another query with all the samples and locations?

module.exports = metadata_router