// SERVER
const express = require('express'); // Microsoft SQL Server Express (relational database management system)
const router = require('./router'); // import router
const app = express(); // create express application
const port = 3000; // set port number

app.use('/api', router); // attach router to API path

app.listen(port, function () {
    console.log("\n***###############################***\n" + 
    `Application deployed on port ${port}\n` + 
    "***###############################***\n\n" +
    "Datasets names:\nhttp://localhost:3000/api/datasets\n\n"+
    "SNPs+InDels counts grouped by chromosome:\nhttp://localhost:3000/api/counts\n\n" +
    "SNPs+InDels counts per genome grouped by chromosome:\nhttp://localhost:3000/api/alt/genome_7208.vcf\n"+
    "http://localhost:3000/api/alt/genome_8233.vcf\nhttp://localhost:3000/api/alt/genome_9968.vcf\n"+
    "SNPs counts per specific genome grouped by chromosome:\nhttp://localhost:3000/api/SNPs/genome_9968.vcf      (e.g.)\n" +
    "InDels counts per specific genome grouped by chromosome:\nhttp://localhost:3000/api/indels/genome_9968.vcf"

    );
});

// from terminal:
// npm init
// npm install express --save
// npm install sqlite3@5.0.0 --save
// node server.js

