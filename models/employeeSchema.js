//import mongoose
const mongoose = require('mongoose')

//create new schema using mongoose object
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

// Don't forget to export mongoose model with schema
module.exports = mongoose.model('employee',employeeschema);