const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    q:{
        type: String,
        required: true
    },
    options:{
        type: Array,
        required: true
    },
    ans:{
        type: Number,
        required: true
    },
    theme:{
        type: String,
        required: true
    }
}, {timestamps:true});

const Model = mongoose.model('Model', mySchema);

module.exports = Model;