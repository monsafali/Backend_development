const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

// Set up view engine and views directory
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
    .then(() => {
        console.log("Connections established Successfully");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


app.get("/", (req, res) => {
    res.send("Root is working fine");
});

app.listen(port, () => {
    console.log("Server is listening on port:", port);
});
