const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require("body-parser")
const app = express();
const port = 3001

//emp is database name
const url = "mongodb://localhost/emp"

//Add url to mongoose connect 
mongoose.connect(url, { useNewUrlParser: true })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//create mongoose.connection obj with name "con"
const con = mongoose.connection

//open mongodb connection  with returning 
con.on('open', () => {
  console.log("connected to Mongodb")
})

//root route with success message
app.get('/', (req, res) => {
  try {
    res.send('heyy there server activated successfully!!')
  } catch (err) {
    res.statusMessage("something went wrong ....")
  }

})

//attach "/employee" route to app
const employes = require('./routes/employes')
app.use("/employes", employes)


//running express app on port number 3001 
app.listen(port || process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})

