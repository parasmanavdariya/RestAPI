const mongoose = require('mongoose')

const employeeschema = new mongoose.Schema({
    name :{
        type:String,
        required: 'Please enter your name',
    },
    surname :{
        type:String,
        required: 'Please enter your surname',
    },

} )

module.exports = mongoose.model('employee',employeeschema);