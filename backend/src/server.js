import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import notesRouters from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import rateLimiter from "./middleware/rateLimiter.js"


dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

// middleware
app.use(cors({
    origin: "http://localhost:5173"
})) // Allow request from the url you choose
app.use(express.json()) // This middleware will parse JSON bodies: req.body
app.use(rateLimiter)

app.use("/api/notes", notesRouters)

// Connected to database before start the application
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on port:", PORT)
    })
})