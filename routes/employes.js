const express = require('express')

// create new route object from express.Router()
const route = express.Router()

// import employee schema from models
const employeeschema = require('../models/employeeSchema')

// get request for fetching employee list 
route.get("/", async (req, res) => {
    try {
        // employeeschema.find() will return list of employee from database
        const employee = await employeeschema.find()
        res.json(employee)
    }
    catch (err) {
        console.log("error while fetching employee list", err)

    }
})

//employeeschema.findById(req.params.id) will fetch only one employee as per Id passed in url
route.get("/:id", async (req, res) => {
    try {
        const employee = await employeeschema.findById(req.params.id)
        res.json(employee)
    }
    catch (err) {
        console.log("error", err)
    }
})

// post data with require fields
route.post("/", async (req, res) => {
    const employee = new employeeschema({
        name: req.body.name,
        surname: req.body.surname,
    })

    try {
        const employeeData = employee.save()
        res.json(employeeData)
    }
    catch (err) {
        console.log("error", err)
    }
})

//update employee by passing id and data in to body of patch request 
route.patch("/:id", async (req, res) => {
    try {
        const employee = await employeeschema.findById(req.params.id)
        console.log(employee)
        console.log(req.body)
        let employeeData = "";

        //update only passed data which is given by user
        req.body.hasOwnProperty('name') ? employee.name = req.body.name : null
        req.body.hasOwnProperty('surname') ? employee.surname = req.body.surname : null

        employeeData = employee.save()
        res.json(employeeData)
    }
    catch (err) {
        console.log("error", err)
    }
})


//delete employee by passing perticular id in url as parameter
route.delete("/:id", async (req, res) => {
    try {
        const employee = await employeeschema.findById(req.params.id)
        const employeeData = employee.delete()
        res.json(employeeData)
    }
    catch (err) {
        console.log("error", err)
    }
})
module.exports = route;