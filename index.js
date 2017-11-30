const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 5000

let app = express()

app.use(bodyParser.json())

app.post('/link', (req, res) => {
    if (req.body.infoField1 === "foo@bar.com") {
        res.send(JSON.stringify({response: "OK", "userId": "user123"}))
    }
    else {
        res.send(JSON.stringify({ response: "FAIL_ACCOUNT_INVALID" }))
    }
})

app.post('/fulfillment', (req, res) => {
    let request = req.body

    if (req.body.userId !== "user123") {
        res.send(JSON.stringify({
            response: "FAIL_USER_INVALID"
        }))
        return
    }

    if (req.body.productId !== "abc123") {
        res.send(JSON.stringify({
            response: "FAIL_OTHER"
        }))
        return
    }

    let response
    switch (request.operation) {
        case "SubscriptionActivate":
            response = { response: "OK" }
            break
        case "SubscriptionDeactivate":
            response = { response: "OK" }
            break
    }
    console.log(response)
    res.send(JSON.stringify(response))
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))