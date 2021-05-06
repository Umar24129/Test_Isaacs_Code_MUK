const express = require('express')
const Test = require('./modules/test.controller')
const app = express()
app.use(express.json())

// result on /getNewRoute
app.get('/getNewRoute',(req,res)=>{    
  let result= Test.solution()
   res.send(result)
})

const port = process.env.PORT || 2000
app.listen(port, () => {
    console.log("WhatsUpp")
})