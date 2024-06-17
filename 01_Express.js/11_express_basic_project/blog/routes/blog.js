const express = require('express')
const path = require('path')
const blogs = require('path')

const router = express.Router()


router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../template/index.html'))
})


router.get('/blog', (req,res)=>{
    blogs.forEach(e => {
        console.log(e.title)
    });
    res.sendFile(path.join(__dirname, '../template/index.html'))
})

module.exports = router