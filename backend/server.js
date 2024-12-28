import express from "express"
import colors from "colors"
import errorhandler from "./middleware/errorMiddleware.js"
import connectDB from "./config/db.js"
import dotenv  from "dotenv"
dotenv.config()
import router from "./routes/goalRoutes.js"


const port = process.env.PORT || 5000

connectDB()

const app = express()

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/api/goals',router)

//error handler
app.use(errorhandler)


app.listen(port,() => {
    console.log(`server compiled on port ${port}`);
})

