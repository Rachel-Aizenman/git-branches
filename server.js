const express = require('express')
// const request = require('request')
const api = require('./server/routes/api')
const app = express()
const port = 1000
const path = require('path')


//===============//
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})
