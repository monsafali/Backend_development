const mongoose = require("mongoose")


const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to:{
        type:String,
        required: true
    },
    msg:{
        type:String,
        maxLenght: 50
    },
    created_at:{
        type: Date,
        required: true
    }
})


const Chats = mongoose.model("Chat", chatSchema);


module.exports = Chats