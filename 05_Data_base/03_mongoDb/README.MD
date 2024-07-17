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
