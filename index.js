const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

let app = express()

app.get('*', (req, res) => {
    res.send(JSON.stringify(req.headers))
})

app.post('*', (req, res) => {
    res.send(JSON.stringify(req.headers))
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))