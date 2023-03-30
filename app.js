const express = require('express')
const server = express()
const porta = 3000
const exphs = require("express-handlebars")
const { urlencoded } = require('express')
const conection = require("./config/conection")
const routers = require("./routers/router")

server.engine("handlebars", exphs.engine())
server.set("view engine",'handlebars')
server.use(express.json())
server.use(urlencoded({extended:true}))
server.use(express.static("public"))
server.use("/",routers)


conection
.sync()
//.sync({forcer:true})
.then(() => {
    server.listen(porta,()=>{
        console.log("Servidor ativo !")
    })
}).catch((err) => {
    console.log(err)    
});