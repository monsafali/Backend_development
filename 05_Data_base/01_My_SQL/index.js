const { faker, tr } = require('@faker-js/faker');


const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'practise',
  password: "Root@1234"
});
 


let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
   
}
// console.log(User())



// Inserting new Data;
let q = "INSERT INTO user (id, username, email, password) VALUES ?"; 

let data = [];


for (let i=1; i<=100;i++ ) {
  data.push(getRandomUser()); //100 fake users creating by this funciton
}


try {
    connection.query(q,[data],(err, result) =>{
        if(err) throw err;
        console.log(result);
    })
} catch(err){
    console.log(err)
}

connection.end();