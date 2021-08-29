import express from 'express'
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";

const app = express()
mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/amazonb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
})

app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.get("/", (req, res) => {
    res.send("server is alive")
})
app.use((error, req, res) => {
    res.status(500).send({message: error.message})
})
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
})