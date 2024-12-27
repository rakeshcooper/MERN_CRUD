import express from "express"
import dotenv  from "dotenv"
dotenv.config()
import router from "./routes/goalRoutes.js"


const port = process.env.PORT || 5000
const app = express()

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/api/goals',router)


app.listen(port,() => {
    console.log(`server compiled on port ${port}`);
})

