const {MongoClient, ObjectId} = require("mongodb"); 
let singleton;

async function connect(){
    if(singleton) return singleton;

    const client = new MongoClient(process.env.DB_HOST);
    await client.connect();

    singleton = client.db(process.env.DB_DATABASE);
    return singleton;
}

async function findAll(collection){
    const db = await connect();
    let salas = await db.collection(collection).find().toArray();
    console.log(salas)
    return salas;
}

module.exports={findAll}