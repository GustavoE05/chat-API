var express = require("express");
var app = express();
const salaController = require("./controllers/salaController")
app.use(express.urlencoded({extended : true}));
app.use(express.json())

const router = express.Router();
app.use('/', router.get('/', (req, res, next)=>{
    res.status(200).send("<h1>API - CHAT</h1>")
}));
 
app.use('/', router.get("/sobre", (req, res, next) =>{
    res.status(200).send({
    "nome":"API - CHAT",
    "versão":"0.1.0",
    "autor":"Gustavo bacana"
})
}));

app.use("/salas",router.get("/salas", async(req,res, next) =>{
    
    if(!token.checkToken(req.headers.token, req.headers.iduser,
        req.headers.nick))return false;
    
    res.status(200).send(resp);
}));

app.use("/sala/mensagem", router.post("/sala/mensagem", async (req, res) => {
    if(!token.checktoken(req.headers.token,req.headers.iduser,req.headers.nick))
    return false;
    let resp = await salaController.enviarMensagem(req.headers.nick,req.body.msg,req.body.idSala);
    res.status(200).send(resp);
}))

app.use("/entrar",router.post("/entrar", async(req,res, next) =>{
    if(!TokenExpiredError.checkToken(req.headers.token,req.headers.iduser,req.headers.nick)) return false;
    let resp = await salaController.entrar()
    res.status(200).send(resp);
}));

app.use("/sala/entrar",router.post("/sala/entrar", async(req,res, next) =>{
    if(!token.checkToken(req.headers.token,req.headers.iduser.req.headers.nick))
    return false;
    let resp = await salaController.entrar(req.headers.iduser, req.query.idsala);
    res.status(200).send(resp);
}));

app.use("/sala/mensagens", router.get("/sala/mensagens", async (req,res)=>
{
    if(!token.checkToken(req.headers.token,req.headers.iduser,req.headers.nick))
    return false;
    let resp= await salaController.buscarMensagens(req.query.idSala, req.query.timestamp);
    res.status(200).send(resp)
}))
module.exports = app;