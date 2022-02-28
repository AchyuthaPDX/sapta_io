require("dotenv").config()
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const JiraApi = require("nodejs-jira-wrapper")

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/refresh", (req,res)=> {
    const refreshToken = req.body.refreshToken
    const jira = new JiraApi({
        authorization: process.env.Auth,
        url: process.env.redirect_uri
    })
})
