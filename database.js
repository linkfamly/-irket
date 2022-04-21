const mongodb = require("mongodb")
const mongoClient = mongodb.MongoClient

const mongoConnect = (callback)=>{
    mongoClient.connect('mongodb+srv://berkayyldz:HsPJGd2eLeHKGweU@cluster0.pppg7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(client =>{
       console.log("connected")
       callback(client)
    })
    .catch(err =>{
        console.log(err)
        throw err
    })
}



module.exports = mongoConnect;