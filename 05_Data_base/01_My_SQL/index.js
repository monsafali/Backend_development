const { faker, tr } = require('@faker-js/faker');


const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'practise',
  password: "Root@1234"
});
 


// Inserting new Data;
let q = "INSERT INTO user (Id, username, email, password) VALUES ?"; 
let users = [
   
    ['678', 'Emily Carter', 'emilycarter@example.com', '456 Oak Avenue'],
    ['910', 'Daniel Smith', 'danielsmith@example.com', '789 Pine Road'],
    ['112', 'Sophia Brown', 'sophiabrown@example.com', '321 Cedar Lane'],
    ['134', 'Liam Johnson', 'liamjohnson@example.com', '654 Birch Street'],
    ['145', 'Olivia Wilson', 'oliviawilson@example.com', '987 Elm Drive'],
    ['789', 'Noah Davis', 'noahdavis@example.com', '159 Maple Avenue'],
    ['234', 'Emma Martinez', 'emmamartinez@example.com', '753 Spruce Road'],
    ['345', 'Mason Lee', 'masonlee@example.com', '246 Oak Street'],
    ['456', 'Ava White', 'avawhite@example.com', '135 Pine Lane']
  ]
  


try {
    connection.query(q,[users],(err, result) =>{
        if(err) throw err;
        console.log(result);
    })
} catch(err){
    console.log(err)
}

connection.end();


let User = () => {
  return {
    Id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

// console.log(User())