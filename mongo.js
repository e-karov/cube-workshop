// // const mongodb = require('mongodb');

// const mongoose = require('mongoose');
    
// const connectionString = 'https://mongodb://localhost:27017/unidb'

// mongoose.connect(connectionString, function (err) {
//     if (err) {
//         console.error('Something happened with DB');
//         throw err;
//     }


// })

// const MongoClient = mongodb.MongoClient;
// const connectionString = 'mongodb://localhost:27017';

// const client = new MongoClient(connectionString, {useUnifiedTopology: true});
// client.connect(function (err) {
//     const db = client.db('testdb');
//     const people = db.collection('people');

//     people.insertOne({ 'name': 'Ivan' }, (err, result) => {
//         people.find({ 'name': 'Ivan' }).toArray((err, data) => {
//             if (err) {
//                 console.error(err);
//                 throw err;
//             }
//             console.log(data[0]);
//         })
//     })
// });


const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }
  
  console.log("Connected to DB");
  const collection = client.db("cubesDb").collection("cubes");
  // perform actions on the collection object
  client.close();
});

