mongosh
show dbs
for create new dbs
use collge........ if they exit they goes it .if not then they create it

for showing currant datab base;
db


BSON Data:
Binary JSON:
in mongo DB Data store in BSON formate.
Json: 
json is text base mean we define key value pairs.
it is very difficutly to parsing in json.space inefficinet 


Collections:
Document: Mongo stores data in form of documents (BSON docs) similar to create table in mysql
Collection: MongoDb Stores documents in collection.



Show collections
 db.student.insertOne({name: "monsaf", age: 25, marks: 78, email: "Monsafali272@gmail.com"})
 db.student.find()

 db.student.insertMany([{name:"ayesha", age: 32},{name: "fatim",age:23, city: "lahore"}])



 FIND IN DB

 db.collection.find() //returns everyhing
 
 for specific queries
 
 db.collection.find({key: value})
 db.collection.findOne({key: value})


Querry Operators
Q: Find student where marks> 75
db.student.find({marks: {$gt:75}})
db.report.find({age: {$eq: 25}})
db.student.find({ age: { $gt: 50 } });
db.report.find({ age: { $gte: 30 } });
db.report.find({ age: { $in: [20, 25, 30] } });
db.report.find({age: {$lt:20}})
db.report.find({age: {$ne:25}})


db.report.find({ $and: [{ age: { $gt: 20 } }, { age: { $lt: 25 } }] });




Find students who live in Lahore or Karachi
db.student.find( { city: {$in: ["lahore", "karachi"]}})


Find student who scored >75 or live in lahore
db.student.find( {$or: [{marks: {$gt: 75}},{city: "Lahore"}]})


Update Methods:


db.collection.updateOne(<filter>, <update>, <options>)
db.collection.updateOne({name: "monsaf"},  {$set:{marks:99}}})
db.collection.updateMany()
update all doucumetn that match a specified filter.
db.collection.replaceOne()
db.student.replaceOne({name: "monsaf"},{name: "kamal", marks: 23, state: "punjab"})
Replaces ast most a single document that match a specified filter even though multiple dcument may match the specified filter.


Nesting:

db.student.insertOne({
  name: "Farah",
  performance: {
    marks: 88,
    grade: "A"
  }
})

db.student.find({"performance.marks": 88})


DELETE in DB:

db.student.deleteOne({state: "punjab"})

to all delete
db.student.deleteMany({marks: {$lt: 75}})


to delete complete collection
db.student.delteMany({})

to delete complete db
db.dropDatabase()






Chapter 2:
Mongoose:
A mongose is npm libarary. 
A library that creates a connection between MongoDb & Node.js JavaScript Runtime Environment
It is an ODM (Object Data Modeling) Library. 


CREATE FOLDER insie
inililize node packages
npm init -y

install mongoose
npm i mongoose


Schema:
Schema defines the shape of the documents within that collection. like blue print 
Example:
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
})
const Employee = mongoose.model("Employee", userSchema);


Models:
Model in mongoose is a class with which we construct documents.  



Insert
using Mongoose
inserting One



Inserting Many

Mongowse use Operating Buffering
Mongoose lets you start using your models immediately, without waiting for mangoose to establish a connection to MongoDb.

FIND
model.find() //returns a Query Object (then able)
*Mongoose Queries are nto promises. But they have a .then().

User.find({ age: {$gte:35}})
.then((res)=>{
  console.log(res[0].name);
})
.catch((err)=>{
  console.log(err);
});


model.findOne()
model.findByid()

Update
model.updaeOne()
model.updateMany()

Delete method

Schema Validations
Basically Rules for Schema


Update


