const MONGO = require('mongodb');
const MongoClient = MONGO.MongoClient;
const ObjectId = MONGO.ObjectId;


const dbName = 'interview_test_jonathan_capitolis';    //fill your db name;
const dbURL = 'mongodb://localhost:27017';

// const dbURL = ''; //fill your Atlas info;

var dbConn = null;
async function getCollection(collectionName) {
    const db = await connect()
    return db.collection(collectionName);
}

async function connect() {
    if (dbConn) return dbConn;
    try {
        const client = await MongoClient.connect(dbURL, { useNewUrlParser: true });
        const db = client.db(dbName);
        dbConn = db;
        return db;
    } catch (err) {
        console.log('Cannot Connect to DB', err)
        throw err;
    }
}

async function query(collectionName, filterBy = {}) {
    const collection = await getCollection(collectionName);
    return collection.find(filterBy).toArray();
    
}

async function insert(collectionName, items) {
    const collection = await getCollection(collectionName);
    await collection.insert(items);
    return items;
}


module.exports = {
    query,
    insert
}

