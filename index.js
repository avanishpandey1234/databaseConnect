const { MongoClient, Collection } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "univercity";
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("students");
  //let collection = db.collection("students");
  // let response = await collection.find().toArray();
  // console.log(response);
}
// getData();

// console.log(getData());

// secound wayes to read

const readData = async () => {
  let data = await getData();
  data = await data.find().toArray();
  console.log(data);
};
readData();

var a = 20;

function foo() {
  console.log(a);
  var a = 10;
}
foo();
