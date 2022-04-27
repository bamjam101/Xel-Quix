const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    q:{
        type: Array,
        required: true
    }
}, {timestamps:true});

const Question = mongoose.model('Question', quizSchema);

module.exports = Question;