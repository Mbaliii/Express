const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel  = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

// mongoose.connect("mongodb://localhost:127.0.0.1:27017/User_Input")
mongoose.connect("mongodb+srv://mbali:MBALENHLEKHUMALO@cluster0.muawygv.mongodb.net/")

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({email, password})
                } else {
                    res.json("The password is incorrect")
                }
            } else {
                res.json("No record existed")
            }
        })
})



app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))

})

app.listen(5000, () => {
    console.log("we are working")
})