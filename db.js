const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
const data = {
    db : 'portal3',
    collection : 'users',
    address : 'mongodb://localhost:27017'
}
const fs = require('fs')
const { db, collection, address} = data
const os = require('os')
const dns = require('dns')

const connection = MongoClient.connect(address)
    .then(conn => global.conn = conn.db(db))
    .then(() => console.log('Conexão com mongodb feita com sucesso'))
    .catch(err => console.log(err))

const consultaDadoEspecifico = _id => new Promise((resolve,reject) => {
    global.conn.collection(collection).findOne(_id,(err,register) => {
        if(err){
            reject(err)
        }else{
            resolve(register)
        }
    });
});

const consultaDados = () => new Promise((resolve,reject) => {
    global.conn.collection(collection).find().toArray((err,lista) => {
        if(err){
            reject(err)
        }else{
            resolve(lista)
        }
    });
});


const insereDados = data => new Promise((resolve,reject) => {
    global.conn.collection(collection).insertOne(data,(err,data) => {
        if(err){
            reject(err)
        }else{
            resolve(data)
        }
    }); 
});

const alteraTotal = (id,data) => new Promise((resolve,reject) => {
    global.conn.collection(collection).update({_id:ObjectId(id)},{data},(err,dataNew) => {
        if(err){
            reject(err)
        }else{
            resolve(dataNew)
        }
    });
});


const alteraDados = (id,data) => new Promise((resolve,reject) => {
    global.conn.collection(collection).updateOne({_id:ObjectId(id)},{$set:data},(err,dataUp) => {
        if(err){
            reject(err)
        }else{
            resolve(dataUp)
        }
    });
});

const removeDados = _id => new Promise((resolve,reject) => {
    global.conn.collection(collection).deleteOne(_id,(err,dataRemove) => {
        if(err){
            reject(err)
        }else{
            resolve(dataRemove)
        }
    });
});

module.exports = {
    consultaDados,
    consultaDadoEspecifico,
    insereDados,
    alteraDados,
    alteraTotal,
    removeDados,
    ObjectId,
    connection
}
