const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000
const publicpath = path.join(__dirname, '../static')
const app = express()
app.use(express.static(publicpath))

app.listen(port, () => {
    console.log('Server has started on port ', port )
})