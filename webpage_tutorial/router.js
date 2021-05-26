// MODULAR ROUTER
const express = require('express'); // Microsoft SQL Server Express (relational database management system) 
const sqlite3 = require('sqlite3').verbose(); // npm install sqlite3@5.0.0 --save

const vcf_router = express.Router(); // set router 
const db = new sqlite3.Database('./vcf_db.sqlite');  // database path

vcf_router.use(function (req, res, next) {
    console.log('Received request');
    next();
});

// 1. listing all VCF datasets (genomes) loaded into the database: 
// http://localhost:3000/api/datasets
vcf_router.get('/datasets', function (req, res) {
    const query = 'SELECT file_id FROM file_names;';
    db.all(query, [], function (err, rows) {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

// ###########################################################################################################
// 2. listing the number of variants (SNPs, InDels, or both) contained in each genome, grouped by chromosome.
// ###########################################################################################################

// TEST - ALL COUNTS
// http://localhost:3000/api/counts
vcf_router.get('/counts', function (req, res) {
    const query = 'SELECT chromosome, file_id, COUNT(alteration) AS total_alterations ' +
        'FROM alterations GROUP BY chromosome, file_id ORDER BY file_id;';

    db.all(query, [], function (err, row) {
        if (err) {
            throw err;
        }
        res.json(row);
    });
});

// 2.BOTH
// TEST 1. http://localhost:3000/api/counts/genome_7208.vcf
// TEST 2. http://localhost:3000/api/counts/genome_8233.vcf
// TEST 3. http://localhost:3000/api/counts/genome_9968.vcf
vcf_router.get('/counts/:file_id', function (req, res) {

    const query = 'SELECT chromosome, file_id, COUNT(alteration) AS variants ' +
        'FROM alterations ' +
        'WHERE alterations.file_id = ? ' +
        'GROUP BY chromosome, file_id;';

    const parameters = [
        req.params.file_id
    ];

    db.all(query, parameters, function (err, row) {
        if (err) {
            throw err;
        }
        res.json(row);
    });
});

// 2. SNPs http://localhost:3000/api/counts/snps/genome_7208.vcf
vcf_router.get('/counts/snps/:file_id', function (req, res) {
    /* 
    SNPs if reference and alteration lengths are the same
    */

    const query = 'SELECT chromosome, file_id, COUNT (CASE WHEN LENGTH(reference) = LENGTH(alteration) THEN 1 END) AS SNPs ' +
        'FROM alterations ' +
        'WHERE alterations.file_id = ? ' +
        'GROUP BY chromosome, file_id;';

    const parameters = [
        req.params.file_id
    ];

    db.all(query, parameters, function (err, row) {
        if (err) {
            throw err;
        }
        res.json(row);
    });
});

// 2. Indels http://localhost:3000/api/counts/indels/genome_7208.vcf
vcf_router.get('/counts/indels/:file_id', function (req, res) {
    /* 
    InDels if reference and alteration lengths are different
    */
    const query = 'SELECT chromosome, file_id, COUNT (CASE WHEN LENGTH(reference) != LENGTH(alteration) THEN 1 END) AS InDels ' +
        'FROM alterations ' +
        'WHERE alterations.file_id = ? ' +
        'GROUP BY chromosome, file_id;';

    const parameters = [
        req.params.file_id
    ];

    db.all(query, parameters, function (err, row) {
        if (err) {
            throw err;
        }
        res.json(row);
    });
});

// ################################################################################################################

// Returning a list of variants (SNPs, InDels, or both) located in a specified region of a specified chromosome in a specific dataset.
// 3. 
/// Listing the number of variantes located in a specific region of a specificed chromosome in a specific dataset ///

/// 3. BOTH
// http://localhost:3000/api/list/1/genome_8233.vcf/8371000/8372200 // START - END
vcf_router.get('/list/:chromosome_num/:file_id/:start/:stop', function (req, res) {
    
    const query = 'SELECT file_id, chromosome, position, filter, reference, alteration, qualities.quality, info, format ' +
        'FROM alterations JOIN qualities JOIN formats WHERE file_id = ? ' +
        'AND chromosome = ? ' +
        'AND position >= ? AND position <= ? ' +
        'GROUP BY file_id, position;';

    const parameters = [
        req.params.file_id,
        req.params.chromosome_num,
        req.params.start,
        req.params.stop
    ];

    db.all(query, parameters, function (err, row) {
        if (err) {
            throw err;
        }
        res.json(row);
    });
});

//3. SNPS
// test http://localhost:3000/api/list/snps/1/genome_8233.vcf/8371000/8372200
vcf_router.get('/list/snps/:chromosome_num/:file_id/:start/:stop', function (req, res) {
    const query = 'SELECT file_id, chromosome, position, filter, reference, alteration, ' +
        '(CASE WHEN LENGTH(reference) = LENGTH(alteration) THEN 1 END) AS is_SNP, qualities.quality, info, format ' +
        'FROM alterations JOIN qualities JOIN formats ' +
        'WHERE file_id = ? ' +
        'AND chromosome = ? ' +
        'AND position >= ? AND position <= ? AND is_SNP = 1 ' +
        'GROUP BY file_id, position;';

    const parameters = [
        req.params.file_id,
        req.params.chromosome_num,
        req.params.start,
        req.params.stop
    ];

    db.all(query, parameters, function (err, row) {
        if (err) {
            throw err;
        }
        res.json(row);
    });
});

//3. INDELS
// test http://localhost:3000/api/list/indels/1/genome_8233.vcf/851186/977705 ## EMPTY - NO INDELS FOUND 
// test with InDels: http://localhost:3000/api/list/indels/1/genome_8233.vcf/370360/400000 # 1 found
vcf_router.get('/list/indels/:chromosome_num/:file_id/:start/:stop', function (req, res) {
    const query = 'SELECT file_id, chromosome, position, filter, reference, alteration, ' +
        '(CASE WHEN LENGTH(reference) != LENGTH(alteration) THEN 1 END) AS is_InDel, qualities.quality, info, format ' +
        'FROM alterations JOIN qualities JOIN formats ' +
        'WHERE file_id = ? ' +
        'AND chromosome = ? ' +
        'AND position >= ? AND position <= ? AND is_InDel = 1 ' +
        'GROUP BY file_id, position;';

    const parameters = [
        req.params.file_id,
        req.params.chromosome_num,
        req.params.start,
        req.params.stop
    ];

    db.all(query, parameters, function (err, row) {
        if (err) {
            throw err;
        }
        res.json(row);
    });
});

// router stored in vcf_router variable
module.exports = vcf_router