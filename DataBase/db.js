const mongoose = require('mongoose');

async function connectToDb(){
    await mongoose.connect(
        'mongodb://0.0.0.0:27017/LearnNode',
        { 
            autoIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err)=>{
            if(err) console.error(`An error occured while connecting to MongoDB: $  {err}`)
            else console.log("MongoDB connected");
        }
    );
}


module.exports = connectToDb


/* MongoDB module
const { MongoClient } = require('mongodb')

const url = "mongodb+srv://TheoLesage:qMjJMLaXNvCpIOWz@devcluster.ntyfi72.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url);

async function connect(){
    await client.connect()
    const db = await client.db("Node-learn")
    return db
}

module.exports = connect(()=>{
    console.log("db connected");
})
 */
/* Atlas privided connection method
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://TheoLesage:qMjJMLaXNvCpIOWz@devcluster.ntyfi72.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
 */