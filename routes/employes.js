const express = require('express')

const route = express.Router()

const employeeschema = require('../models/employeeSchema')

route.get("/", async (req, res) => {
try {
        const employee = await employeeschema.find()
        res.json(employee)
    } 
catch (err) {
        console.log("error", err)
    
    }

})


route.get("/:id", async (req, res) => {
    try {
            const employee = await employeeschema.findById(req.params.id)
            res.json(employee)
        } 
    catch (err) {
            console.log("error", err)  
        }
    })

route.post("/",async (req, res)=>{
    const employee = new employeeschema({
        name:req.body.name,
        surname:req.body.surname,
    })

    try {
    const employeeData = employee.save()
    res.json(employeeData)
    }
    catch(err){
       console.log("error",err)
    }
})

route.patch("/:id",async (req, res)=>{
    try {
        const employee = await employeeschema.findById(req.params.id)
        console.log(employee)
       console.log(req.body)
       let employeeData="";
 
    req.body.hasOwnProperty('name') ? employee.name = req.body.name : null
    req.body.hasOwnProperty('surname') ? employee.surname = req.body.surname : null

    employeeData = employee.save()
        res.json(employeeData)
    } 
catch (err) {
        console.log("error", err)  
    }
})



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