class Person {
    constructor(name,age){
        console.log('person class constructor')
        this.name =name;
        this.age = age
    }
    talk(){
        console.log(`Hi I am ${this.name}`)
    }
}

// To perform inheritance we use extend key word and super

class Students extends Person {
    constructor (name, age,marks){
        console.log('student class constructor')
        super(name, age) //Parents class constructor is being called
        this.marks = marks
    }
    
}

class Teacher extends Person {
    constructor (name, age,subject){
        console.log('teacher class constructor')
        super(name, age) //Parents class constructor is being called
        this.subject = subject
    }
}


let stu1 = new Students('monsaf',23,95)
let techer = new Teacher('shardha',24,'webdev')




// .................................................................

class Mammal { //base class /parents classe
     constructor (name){
        this.name = name;
        this.type = "warm-blooded";
     }
    eat(){
        console.log("i am eating");
    }
}


class Dog extends Mammal { //childl class
    constructor(){
        super(name);
    }
    bark(){
        console.log("woof..")
    }
    eat(){
        console.log("Dog is eating");
    }
}





class Cat extends Mammal { //child class
    constructor(){
        super(name);
    }
    meow(){
        console.log("meow..")
    }
}