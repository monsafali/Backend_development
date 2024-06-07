// Factory function

function PersonMaker (name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi my name is ${this.name}`);
        }
    }
    return person
}

// same above copy with new constructor


// function Person (name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(this)
// }


// Person.prototype.talk = function(){
//     console.log(`Hi my name is ${this.name}`)
// }

// let p1 = new Person ('monsaf',32);
// let p2 = new Person ('kaleem',22);




// Classes

 class Person {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi my name is ${this.name}`)
    }
 }

let p1 = new Person ('monsaf',32);
let p2 = new Person ('kaleem',22);