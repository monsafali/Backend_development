const mongoose = require("mongoose");
const Chat = require("./models/chat.js");



main()
    .then(() => {
        console.log("Connections established Successfully");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}


let allChats = [{
    from: "monsaf",
    to: "kaleem",
    msg: "Send me your exam sheet",
    created_at: new Date()
},
{
    from: "alice",
    to: "bob",
    msg: "Can you send me the project files?",
    created_at: new Date()
},
{
    from: "charlie",
    to: "dave",
    msg: "Let's meet for coffee tomorrow.",
    created_at: new Date()
},
{
    from: "eve",
    to: "frank",
    msg: "Have you completed the assignment?",
    created_at: new Date()
},
{
    from: "grace",
    to: "heidi",
    msg: "I will be late for the meeting.",
    created_at: new Date()
},
{
    from: "ivy",
    to: "jack",
    msg: "Can you review my code?",
    created_at: new Date()
},
{
    from: "kate",
    to: "leo",
    msg: "What's the plan for the weekend?",
    created_at: new Date()
},
{
    from: "mia",
    to: "nick",
    msg: "Please send me the updated document.",
    created_at: new Date()
}
];


Chat.insertMany(allChats)
