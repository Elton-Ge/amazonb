import express from 'express'
import data from "./data.js";

const app = express()

app.get("/api", (req, res) => {
    res.send(data.products)
})
app.get("/", (req, res) => {
    res.send("server is alive")
})
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
})