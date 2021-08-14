const mongoose = require('mongoose');
//schema - structure of docs
const Schema = mongoose.Schema; // constructor function


//SCHEMA: describe structure of document
const metadataSchema = new Schema({
    sample: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
        group_pca: {
            type: String,
            required: true
        }

        // automatically generate timestamps on doc
}, {timestamps: true}
);

//MODEL: provides interface to communicate with db collection for doc type
const Metadata = mongoose.model('Metadata', metadataSchema); //takes in name of model

//export model
module.exports = Metadata;