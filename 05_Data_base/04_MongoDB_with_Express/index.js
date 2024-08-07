const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override")
const ExpresError = require("./ExpressError")


// Set up view engine and views directory
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))


main()
    .then(() => {
        console.log("Connections established Successfully");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}


// Indeex route
app.get("/chats", async (req, res, next) => {
    try {
      let chats = await Chat.find();
      // console.log(chats); // Check structure here
      res.render("index", { chats });
    } catch (err) {
      // console.error(err);
      // res.status(500).send("Internal Server Error");
      next(err);
    }
  });
  
  // New Route
  app.get("/chats/new", (req, res) =>{
    // throw new ExpresError(404, "Page Not found");
    res.render("new")
  })

  // Create Route

  app.post("/chats", async (req, res, next) => {
    try{
      let {from, to, msg} = req.body;
      let newChat  = new Chat ({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
      });
      await newChat.save();
      res.redirect("/chats");
    }catch (err){
      next(err)
    }
   });

  // NEW Show Route
  app.get("/chats/:id", async (req, res, next)=>{
    let { id } = req.params;
    let chat = await Chat.findById(id);
    // if(!chat) {
    //   next(new ExpresError(404, "Chat Not found"));
    // }
    res.render("edit", {chat});
  })


// Edit Route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  try {
      let chat = await Chat.findById(id);
      res.render("edit", { chat });
  } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
  }
});


// Update Route
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg: newMsg } = req.body;
  console.log(newMsg)

  let updatechat = await Chat.findByIdAndUpdate(
    id, 
    {msg: newMsg },
    {runValidators: true, new: true}
  );
  console.log(updatechat)
  res.redirect("/chats")
  })
// Destroy Route

app.delete("/chats/:id",  async(req, res)=>{
  let { id } = req.params;
  let deletedChat =  await Chat.findByIdAndDelete(id);
  console.log(deletedChat)
  res.redirect("/chats")
})
app.get("/", (req, res) => {
    res.send("Root is working fine");
});



// Error Handlig Middleware
app.use ((err, req, res, next)=>{
  let {status=500, message = "Some Error Occurred"} = err;
  res.status(status).send(message);
})


app.listen(port, () => {
    console.log("Server is listening on port:", port);
});
