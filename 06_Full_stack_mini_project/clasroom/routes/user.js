const express = require("express")
const router = express.Router();

// index user

router.get("/", (req, res)=>{
    res.send("GEt for users")
})

// Show user
router.get("/:id", (req, res)=>{
    res.send("GEt for show users")
})

// Post users
router.post("/", (req, res)=>{
    res.send("GEt for show users")
})

// Delete users
router.post("/:id", (req, res)=>{
    res.send("GEt for users ID")
})



module.exports = router