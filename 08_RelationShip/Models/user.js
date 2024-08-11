const mongoose = require('mongoose');
const {Schema} = mongoose;

main().then(() =>{
    console.log("Connection Successfuly")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


const userSchema = new Schema ({
    username: String,
    addresses:  [
        {
            _id: false,
            location: String,
            City: String,
        },
    ],
})


const User = mongoose.model("User", userSchema);

const adddUsers =  async () =>{
    let user1 = new User({
        username : "Sherlocknlme",
        addresses: [
        {
            location: "Gulshen Iqbal karachi",
            City :"Karachi"
         },
    ],
    });
    user1.addresses.push({location: 'Johar Town Lahore', City: "Lahore"});
    let result = await user1.save();
    console.log(result)
}


adddUsers();

  