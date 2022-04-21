const express = require('express')
const bodyParser = require("body-parser")
const path = require("path")
const { join } = require("path")
const mongoConnect = require("./database")




const app = express()

app.use(bodyParser.urlencoded({extended : false}))


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"gesForm.html"))
})

app.post('/',(req,res)=>{
    console.log(req.body)
})


mongoConnect((client)=>{
    app.listen(3000);
    console.log(client)
})

// app.listen(8080,()=>{
//     console.log("listening to 8080 port")
// })