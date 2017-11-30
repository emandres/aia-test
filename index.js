const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

let app = express()


app.post('/link', (req, res) => {
    res.send(JSON.stringify({
        headers: req.headers,
        body: req.body
    }))
})

app.post('/fulfillment', (req, res) => {
    res.send(JSON.stringify({
        headers: req.headers,
        body: req.body
    }))
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))