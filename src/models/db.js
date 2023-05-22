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

async function insterOne(collection, objeto){
    const db = await connect();
    return db.collection(collection).insterOne(objeto)
}

 async function findOne(collection, _id){
    const db = await connect();
    return await db.collection(collection).find({'_id':new ObjectId(_id)}).toArray();
    if(obj)
        return obj[0];
    return false;
}

let updateOne= async (collection,Object, param)=>{
    const db = await connect();
    let result= await db.collection(collection).updateOne(param, {$set: object}
        );
    return result;
}
module.exports={findAll, insertOne}