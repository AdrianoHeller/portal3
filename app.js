const db = require('./db')
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

if(!port):
    port == 3000

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.get('/',(req,res) => {
    db.consultaDados((data,err) => {
        try{           
           data.forEach(item => {
            let keys = data[item].keys() 
            let values = data[item].values() 
            return item = `1:${keys},2:${values}`            
           })res.json(data)            
        }catch(error as err){
            res.json(`Erro: ${err}`)
        }
    })
})

app.get('/mdata',(req,res) => {
    db.consultaListasUsers((data,err) => {
        try{
            res.json(data)
        }catch(error as err){
            res.json(`Erro: ${err}`)
        }
    })    
})

app.post('/user',(req,res) => {
    const data = req.body
    db.insere((data,err) => {
       try{
           res.json(data)
       }catch(error as err) {
           res.json(`Erro:${err}`)
       }
    });
});

app.put('/:_id',(req,res) => {
    const { _id } = req.params
    db.alteraDados((_id,data,err) => {
        try {
            res.json(data)
        }catch(error as err) {
            res.json(`Erro:${err}`)
        }
    });
});

app.patch('/:_id',(req,res) => {
    const { id } = req.params
    const data = req.body
    db.alteraDados((id,data,err) => {
        try{
            res.json(data)
        }catch(error as err){
            res.json(`Erro: ${err}`)
        }
    })
})

app.listen(port,err => {
    if(err) res.json(err)
    else{
    console.log(`Servidor ouvindo na porta ${port}`)
    } 
})

