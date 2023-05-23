const db = require("./db");
async function registraUsuario(nick){
    return await db.insterOne("Usuario",{"nick": nick})
    
}
let buscarUsuario = async(iduser)=>{
    return db.findOne("Usuario",iduser);
    return user;
}
 let alterarUsuario = async (user)=>{
    return await db.updateOne("Usuario", user,{_id:user._id})
 } 
module.exports = {registraUsuario};