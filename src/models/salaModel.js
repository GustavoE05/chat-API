const db = require("./db");
 async function listarSalas() {
 return await db.findAll("Salas");
 
}

let atualizarMensagens = async (sala) => {
    return await db.updateOne("salas", sala,{_id:sala.id});
}

let buscarSala = async(idSala)=>{
    return db.findOne("salas",idsala);
 }

let buscarMensagens = async (idsala, timestamp)=>{
    let sala = await buscarSala(idsala);
    if(sala.msgs){
        let msgs=[];
        sala.msgs.forEach((msg)=>{
            if(msg.timestamp >= timestamp){
                msgs.push(msg);
            }
        });
        return msgs;
    }
    return [];
}
 module.exports = { listarSalas }; 
