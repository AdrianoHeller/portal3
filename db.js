const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
const data = {
    db: 'portal3',
    collection: 'users',
    address: 'mongodb+srv://ragnar:ragnar18@cluster0-sls0k.mongodb.net/test?retryWrites=true&w=majority'
}
const fs = require('fs')
const { db, collection, address} = data
let connection = MongoClient.connect(address,(err,conn) => {
    if(err){
        return(`Erro:${e}`)
    }else{
        conn = global.conn
        global.conn = conn.db
        return(conn.db)
    }
})
 console.log(connection)

const consultaDados = (callback) => {
    global.conn.collection.find().toArray(callback)
}

const consultaDadoEspecifico = (callback,_id) => {
    global.conn.collection.findOne(callback,_id)
}

const consultaListasUsers = (callback) => {
    let machineKernel = fs.fstat(callback)
    return machineKernel
} 

const insereDados = (data,callback) => {
    global.conn.collection.insert(data,callback)
}

const alteraDados = (_id,data,callback) => {
    global.conn.collection.updateOne({_id:ObjectId(_id)},{$set:{data}},callback)
}

const removeDados = (_id,callback) => {
    global.conn.collection.deleteOne(_id,callback)
}

const filtraUserDb = (list,testMassList) => {
    list.filter(item => {
        item in testMassList
    })
}

module.exports = {
    consultaDados,
    consultaDadoEspecifico,
    consultaListasUsers,
    insereDados,
    alteraDados,
    removeDados,
    filtraUserDb,
    ObjectId,
    MongoClient
}
