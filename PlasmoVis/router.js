// ===========================================================================
// METADATA ROUTES 
// P. knowlesi & P. malariae SQLite queries
// ===========================================================================

const express = require('express'); // Microsoft SQL Server Express (relational database management system) 
const sqlite3 = require('sqlite3').verbose(); // npm install sqlite3@5.0.0 --save
const metadata_router = express.Router(); // set router 

const pk_db = new sqlite3.Database('Pknowlesi_metadata.sqlite');  // database path (for PK)
const pm_db = new sqlite3.Database('Pmalariae_metadata.sqlite');  // database path (for PK)


metadata_router.use(function (req, res, next) {
    console.log('Received request');
    next();
});

// ===========================================================================
//                      P. knowlesi queries
// ===========================================================================

// all metadata info
metadata_router.get('/metadata', function (req, res) {
    const query = 'SELECT * FROM metadata';
    pk_db.all(query, [], function (err, rows) {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

// group by location
metadata_router.get('/locations', function (req, res) {
    const query = 'SELECT location, COUNT(location) AS tot_samples FROM metadata GROUP BY location;';
    pk_db.all(query, [], function (err, rows) {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

// group by pca_group
metadata_router.get('/groups', function (req, res) {
    const query = 'SELECT group_pca, COUNT(group_pca) AS groups FROM metadata GROUP BY group_pca;';
    pk_db.all(query, [], function (err, rows) {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});


// ===========================================================================
//                      P. malariae queries
// ===========================================================================

// all metadata info
metadata_router.get('/metadata_pm', function (req, res) {
    const query = 'SELECT * FROM metadata';
    pm_db.all(query, [], function (err, rows) {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

// group by country
metadata_router.get('/country_pm', function (req, res) {
    const query = 'SELECT country, COUNT(country) AS counts FROM metadata GROUP BY country;'
    pm_db.all(query, [], function (err, rows) {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

// group by continent
metadata_router.get('/continent_pm', function (req, res) {
    const query =  'SELECT continent, COUNT(continent) AS counts FROM metadata GROUP BY continent;';
    pm_db.all(query, [], function (err, rows) {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

// Africa - country counts
metadata_router.get('/africa_pm', function (req, res) {
    const query =   'SELECT country, COUNT(country) AS counts FROM metadata WHERE continent="Africa" GROUP BY country;';
    pm_db.all(query, [], function (err, rows) {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

// Asia - country counts
metadata_router.get('/asia_pm', function (req, res) {
    const query =   'SELECT country, COUNT(country) AS counts FROM metadata WHERE continent="Asia" GROUP BY country;';
    pm_db.all(query, [], function (err, rows) {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

// Americas - country counts
metadata_router.get('/americas_pm', function (req, res) {
    const query =   'SELECT country, COUNT(country) AS counts FROM metadata WHERE continent="Americas" GROUP BY country;';
    pm_db.all(query, [], function (err, rows) {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

// Australasia - country counts
metadata_router.get('/australasia_pm', function (req, res) {
    const query =   'SELECT country, COUNT(country) AS counts FROM metadata WHERE continent="Australasia" GROUP BY country;';
    pm_db.all(query, [], function (err, rows) {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

module.exports = metadata_router