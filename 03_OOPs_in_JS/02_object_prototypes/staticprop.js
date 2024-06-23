class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}


const hitesh = new User("Hitech")
// console.log(hitesh.createId());


class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}


const Iphone = new Teacher("iphone","i@phoen.com")
Iphone.logMe();
console.log(Iphone.createId());