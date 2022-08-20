const express = require('express')
const router = express.Router()
const path = require("path")
const bookRoute = require('./book.routes')

// Middelwears
router.use('/book',bookRoute)

router.get('/', (req, res)=> {
    res.render('index', { message: "Hi' budy" })
})



// 404
router.all('/*',(req, res)=>{
    const filePath = path.join(__dirname, '/../pages/404.html')
    res.sendFile(filePath)
})


module.exports = router;