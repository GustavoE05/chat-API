const db = require("./db");
 async function listarSalas() {
 return await db.findAll("Salas");
}

module.exports = { listarSalas };