const express = require('express')
const app = express()

app.listen(3000,()=>{
    console.log('run server');
})
module.exports = app