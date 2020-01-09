global.db = require('./db')
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

if(!port){
    port == 3000
}   

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/',async (req,res) => {        
await global.db.consultaDados()
        .then((data) => res.json(data))
        .catch(err => res.json(err))       
});

app.get('/mdata',async(req,res) => {    
    let dataArray = await Array(os.userInfo(),os.hostname())
    res.json(dataArray)
})

app.post('/user', async(req,res) => {
    const data = req.body
    global.db.insereDados(await data)
        .then(data => res.json(data)) 
        .catch(err => res.json(err))    
});

app.put('/updateAll/:id', async(req,res) => {
    const { id } = await req.params
    const data = await req.body
    global.db.alteraTotal(id,data)
        .then(data => res.json(data))
        .catch(err => console.log(err))
});

app.patch('/updateTopic/:id',async(req,res) => {
    const { id } = await req.params
    const data = await req.body
    global.db.alteraDados(id,data)
        .then(data => res.json(data))
        .catch(err => console.log(err))
});

app.listen(port,err => {
    if(err) res.json(err)
    else{
        console.log(`Servidor ouvindo na porta ${port}`)
    } 
})

