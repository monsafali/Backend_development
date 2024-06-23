// let arr1 = [1,2,3];
// let arr2 = [1,2,3];


// arr1.sayHello = () => {
//     console.log('Hello, I am arr')
// }

// arr2.sayHello = () => {
//     console.log('Hello, I am arr')
// }





// Factory function

// function PersonMaker (name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi my name is ${this.name}`);
//         }
//     }
//     return person
// }




class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}


const chai = new User("chai","chai@gmai.com","123");

console.log(chai.encryptPassword());
console.log(chai. changeUsername());



class Car {
    constructor(name, year) {
    this.name = name;
    this.year = year;
    }
    age() {
    let date = new Date();
    return date.getFullYear() - this.year;
    }
    }
    let myCar = new Car("Toyota", 2021);
    console.log(myCar.age())